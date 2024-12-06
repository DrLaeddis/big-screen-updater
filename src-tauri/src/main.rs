// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::fs;
use std::path::Path;
use tauri::command;
use tauri::Manager;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
// fn greet(name: &str) -> String {
//     format!("Hello, {}! You've been greeted from Rust!", name)
// }

fn get_jwt_token() -> Result<String, String> {
    // Dapatkan direktori sesuai OS menggunakan Tauri
    let document_dir = tauri::api::path::document_dir()
        .ok_or("Tidak dapat menemukan direktori dokumen")?;
    
    // // Tentukan path file relatif terhadap direktori
    let token_path = document_dir.join("tokens/jwt_token.txt");

    // #[cfg(target_os = "linux")]
    // let token_path = std::path::Path::new("/home/tokens/jwt_token.txt");

    // Cek apakah file ada
    if token_path.exists() {
        match std::fs::read_to_string(&token_path) {
            Ok(token) => {
                println!("Token ditemukan: {}", token);
                Ok(token)
            },
            Err(err) => {
                eprintln!("Gagal membaca file token: {:?}", err);
                Err("Gagal membaca file token.".to_string())
            },
        }
    } else {
        eprintln!("File token tidak ditemukan: {:?}", token_path);
        Err("File token tidak ditemukan".to_string())
    }
}

#[tauri::command]
fn get_userid() -> Result<String, String> {
    let shared_folder_path = "../../tokens/user_id.txt";
    let path = Path::new(shared_folder_path);

    if path.exists() {
        match fs::read_to_string(path) {
            Ok(token) => Ok(token),
            Err(_) => Err("Gagal membaca file token.".into()),
        }
    } else {
        Err("File token tidak ditemukan".into())
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_jwt_token, get_userid])
        .setup(|app| {
            let handle = app.handle();

            // Jalankan auto-update saat aplikasi diluncurkan
            tauri::async_runtime::spawn(async move {
                match handle.updater().check().await {
                    Ok(update_status) => {}
                    Err(e) => {}
                }
            });

            Ok(())
        })
        // Dengarkan event global untuk feedback auto-update (opsional)
        .on_window_event(|event| {
            if let tauri::WindowEvent::CloseRequested { api, .. } = event.event() {
                api.prevent_close(); // Contoh: mencegah aplikasi menutup jika diperlukan
            }
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
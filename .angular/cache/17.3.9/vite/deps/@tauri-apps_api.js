import {
  __async,
  __export,
  __spreadProps,
  __spreadValues
} from "./chunk-GLLL6ZVE.js";

// node_modules/@tauri-apps/api/app.js
var app_exports = {};
__export(app_exports, {
  getName: () => getName,
  getTauriVersion: () => getTauriVersion,
  getVersion: () => getVersion,
  hide: () => hide,
  show: () => show
});

// node_modules/@tauri-apps/api/tauri.js
var tauri_exports = {};
__export(tauri_exports, {
  convertFileSrc: () => convertFileSrc,
  invoke: () => invoke,
  transformCallback: () => transformCallback
});
function uid() {
  return window.crypto.getRandomValues(new Uint32Array(1))[0];
}
function transformCallback(callback, once3 = false) {
  const identifier = uid();
  const prop = `_${identifier}`;
  Object.defineProperty(window, prop, {
    value: (result) => {
      if (once3) {
        Reflect.deleteProperty(window, prop);
      }
      return callback === null || callback === void 0 ? void 0 : callback(result);
    },
    writable: false,
    configurable: true
  });
  return identifier;
}
function invoke(_0) {
  return __async(this, arguments, function* (cmd, args = {}) {
    return new Promise((resolve2, reject) => {
      const callback = transformCallback((e) => {
        resolve2(e);
        Reflect.deleteProperty(window, `_${error}`);
      }, true);
      const error = transformCallback((e) => {
        reject(e);
        Reflect.deleteProperty(window, `_${callback}`);
      }, true);
      window.__TAURI_IPC__(__spreadValues({
        cmd,
        callback,
        error
      }, args));
    });
  });
}
function convertFileSrc(filePath, protocol = "asset") {
  return window.__TAURI__.convertFileSrc(filePath, protocol);
}

// node_modules/@tauri-apps/api/helpers/tauri.js
function invokeTauriCommand(command) {
  return __async(this, null, function* () {
    return invoke("tauri", command);
  });
}

// node_modules/@tauri-apps/api/app.js
function getVersion() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "App",
      message: {
        cmd: "getAppVersion"
      }
    });
  });
}
function getName() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "App",
      message: {
        cmd: "getAppName"
      }
    });
  });
}
function getTauriVersion() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "App",
      message: {
        cmd: "getTauriVersion"
      }
    });
  });
}
function show() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "App",
      message: {
        cmd: "show"
      }
    });
  });
}
function hide() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "App",
      message: {
        cmd: "hide"
      }
    });
  });
}

// node_modules/@tauri-apps/api/cli.js
var cli_exports = {};
__export(cli_exports, {
  getMatches: () => getMatches
});
function getMatches() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Cli",
      message: {
        cmd: "cliMatches"
      }
    });
  });
}

// node_modules/@tauri-apps/api/clipboard.js
var clipboard_exports = {};
__export(clipboard_exports, {
  readText: () => readText,
  writeText: () => writeText
});
function writeText(text) {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Clipboard",
      message: {
        cmd: "writeText",
        data: text
      }
    });
  });
}
function readText() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Clipboard",
      message: {
        cmd: "readText",
        // if data is not set, `serde` will ignore the custom deserializer
        // that is set when the API is not allowlisted
        data: null
      }
    });
  });
}

// node_modules/@tauri-apps/api/dialog.js
var dialog_exports = {};
__export(dialog_exports, {
  ask: () => ask,
  confirm: () => confirm,
  message: () => message,
  open: () => open,
  save: () => save
});
function open() {
  return __async(this, arguments, function* (options = {}) {
    if (typeof options === "object") {
      Object.freeze(options);
    }
    return invokeTauriCommand({
      __tauriModule: "Dialog",
      message: {
        cmd: "openDialog",
        options
      }
    });
  });
}
function save() {
  return __async(this, arguments, function* (options = {}) {
    if (typeof options === "object") {
      Object.freeze(options);
    }
    return invokeTauriCommand({
      __tauriModule: "Dialog",
      message: {
        cmd: "saveDialog",
        options
      }
    });
  });
}
function message(message2, options) {
  return __async(this, null, function* () {
    var _a, _b;
    const opts = typeof options === "string" ? { title: options } : options;
    return invokeTauriCommand({
      __tauriModule: "Dialog",
      message: {
        cmd: "messageDialog",
        message: message2.toString(),
        title: (_a = opts === null || opts === void 0 ? void 0 : opts.title) === null || _a === void 0 ? void 0 : _a.toString(),
        type: opts === null || opts === void 0 ? void 0 : opts.type,
        buttonLabel: (_b = opts === null || opts === void 0 ? void 0 : opts.okLabel) === null || _b === void 0 ? void 0 : _b.toString()
      }
    });
  });
}
function ask(message2, options) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e;
    const opts = typeof options === "string" ? { title: options } : options;
    return invokeTauriCommand({
      __tauriModule: "Dialog",
      message: {
        cmd: "askDialog",
        message: message2.toString(),
        title: (_a = opts === null || opts === void 0 ? void 0 : opts.title) === null || _a === void 0 ? void 0 : _a.toString(),
        type: opts === null || opts === void 0 ? void 0 : opts.type,
        buttonLabels: [
          (_c = (_b = opts === null || opts === void 0 ? void 0 : opts.okLabel) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : "Yes",
          (_e = (_d = opts === null || opts === void 0 ? void 0 : opts.cancelLabel) === null || _d === void 0 ? void 0 : _d.toString()) !== null && _e !== void 0 ? _e : "No"
        ]
      }
    });
  });
}
function confirm(message2, options) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e;
    const opts = typeof options === "string" ? { title: options } : options;
    return invokeTauriCommand({
      __tauriModule: "Dialog",
      message: {
        cmd: "confirmDialog",
        message: message2.toString(),
        title: (_a = opts === null || opts === void 0 ? void 0 : opts.title) === null || _a === void 0 ? void 0 : _a.toString(),
        type: opts === null || opts === void 0 ? void 0 : opts.type,
        buttonLabels: [
          (_c = (_b = opts === null || opts === void 0 ? void 0 : opts.okLabel) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : "Ok",
          (_e = (_d = opts === null || opts === void 0 ? void 0 : opts.cancelLabel) === null || _d === void 0 ? void 0 : _d.toString()) !== null && _e !== void 0 ? _e : "Cancel"
        ]
      }
    });
  });
}

// node_modules/@tauri-apps/api/event.js
var event_exports = {};
__export(event_exports, {
  TauriEvent: () => TauriEvent,
  emit: () => emit2,
  listen: () => listen2,
  once: () => once2
});

// node_modules/@tauri-apps/api/helpers/event.js
function _unlisten(event, eventId) {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Event",
      message: {
        cmd: "unlisten",
        event,
        eventId
      }
    });
  });
}
function emit(event, windowLabel, payload) {
  return __async(this, null, function* () {
    yield invokeTauriCommand({
      __tauriModule: "Event",
      message: {
        cmd: "emit",
        event,
        windowLabel,
        payload
      }
    });
  });
}
function listen(event, windowLabel, handler) {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Event",
      message: {
        cmd: "listen",
        event,
        windowLabel,
        handler: transformCallback(handler)
      }
    }).then((eventId) => {
      return () => __async(this, null, function* () {
        return _unlisten(event, eventId);
      });
    });
  });
}
function once(event, windowLabel, handler) {
  return __async(this, null, function* () {
    return listen(event, windowLabel, (eventData) => {
      handler(eventData);
      _unlisten(event, eventData.id).catch(() => {
      });
    });
  });
}

// node_modules/@tauri-apps/api/event.js
var TauriEvent;
(function(TauriEvent2) {
  TauriEvent2["WINDOW_RESIZED"] = "tauri://resize";
  TauriEvent2["WINDOW_MOVED"] = "tauri://move";
  TauriEvent2["WINDOW_CLOSE_REQUESTED"] = "tauri://close-requested";
  TauriEvent2["WINDOW_CREATED"] = "tauri://window-created";
  TauriEvent2["WINDOW_DESTROYED"] = "tauri://destroyed";
  TauriEvent2["WINDOW_FOCUS"] = "tauri://focus";
  TauriEvent2["WINDOW_BLUR"] = "tauri://blur";
  TauriEvent2["WINDOW_SCALE_FACTOR_CHANGED"] = "tauri://scale-change";
  TauriEvent2["WINDOW_THEME_CHANGED"] = "tauri://theme-changed";
  TauriEvent2["WINDOW_FILE_DROP"] = "tauri://file-drop";
  TauriEvent2["WINDOW_FILE_DROP_HOVER"] = "tauri://file-drop-hover";
  TauriEvent2["WINDOW_FILE_DROP_CANCELLED"] = "tauri://file-drop-cancelled";
  TauriEvent2["MENU"] = "tauri://menu";
  TauriEvent2["CHECK_UPDATE"] = "tauri://update";
  TauriEvent2["UPDATE_AVAILABLE"] = "tauri://update-available";
  TauriEvent2["INSTALL_UPDATE"] = "tauri://update-install";
  TauriEvent2["STATUS_UPDATE"] = "tauri://update-status";
  TauriEvent2["DOWNLOAD_PROGRESS"] = "tauri://update-download-progress";
})(TauriEvent || (TauriEvent = {}));
function listen2(event, handler) {
  return __async(this, null, function* () {
    return listen(event, null, handler);
  });
}
function once2(event, handler) {
  return __async(this, null, function* () {
    return once(event, null, handler);
  });
}
function emit2(event, payload) {
  return __async(this, null, function* () {
    return emit(event, void 0, payload);
  });
}

// node_modules/@tauri-apps/api/fs.js
var fs_exports = {};
__export(fs_exports, {
  BaseDirectory: () => BaseDirectory,
  Dir: () => BaseDirectory,
  copyFile: () => copyFile,
  createDir: () => createDir,
  exists: () => exists,
  readBinaryFile: () => readBinaryFile,
  readDir: () => readDir,
  readTextFile: () => readTextFile,
  removeDir: () => removeDir,
  removeFile: () => removeFile,
  renameFile: () => renameFile,
  writeBinaryFile: () => writeBinaryFile,
  writeFile: () => writeTextFile,
  writeTextFile: () => writeTextFile
});
var BaseDirectory;
(function(BaseDirectory2) {
  BaseDirectory2[BaseDirectory2["Audio"] = 1] = "Audio";
  BaseDirectory2[BaseDirectory2["Cache"] = 2] = "Cache";
  BaseDirectory2[BaseDirectory2["Config"] = 3] = "Config";
  BaseDirectory2[BaseDirectory2["Data"] = 4] = "Data";
  BaseDirectory2[BaseDirectory2["LocalData"] = 5] = "LocalData";
  BaseDirectory2[BaseDirectory2["Desktop"] = 6] = "Desktop";
  BaseDirectory2[BaseDirectory2["Document"] = 7] = "Document";
  BaseDirectory2[BaseDirectory2["Download"] = 8] = "Download";
  BaseDirectory2[BaseDirectory2["Executable"] = 9] = "Executable";
  BaseDirectory2[BaseDirectory2["Font"] = 10] = "Font";
  BaseDirectory2[BaseDirectory2["Home"] = 11] = "Home";
  BaseDirectory2[BaseDirectory2["Picture"] = 12] = "Picture";
  BaseDirectory2[BaseDirectory2["Public"] = 13] = "Public";
  BaseDirectory2[BaseDirectory2["Runtime"] = 14] = "Runtime";
  BaseDirectory2[BaseDirectory2["Template"] = 15] = "Template";
  BaseDirectory2[BaseDirectory2["Video"] = 16] = "Video";
  BaseDirectory2[BaseDirectory2["Resource"] = 17] = "Resource";
  BaseDirectory2[BaseDirectory2["App"] = 18] = "App";
  BaseDirectory2[BaseDirectory2["Log"] = 19] = "Log";
  BaseDirectory2[BaseDirectory2["Temp"] = 20] = "Temp";
  BaseDirectory2[BaseDirectory2["AppConfig"] = 21] = "AppConfig";
  BaseDirectory2[BaseDirectory2["AppData"] = 22] = "AppData";
  BaseDirectory2[BaseDirectory2["AppLocalData"] = 23] = "AppLocalData";
  BaseDirectory2[BaseDirectory2["AppCache"] = 24] = "AppCache";
  BaseDirectory2[BaseDirectory2["AppLog"] = 25] = "AppLog";
})(BaseDirectory || (BaseDirectory = {}));
function readTextFile(_0) {
  return __async(this, arguments, function* (filePath, options = {}) {
    return invokeTauriCommand({
      __tauriModule: "Fs",
      message: {
        cmd: "readTextFile",
        path: filePath,
        options
      }
    });
  });
}
function readBinaryFile(_0) {
  return __async(this, arguments, function* (filePath, options = {}) {
    const arr = yield invokeTauriCommand({
      __tauriModule: "Fs",
      message: {
        cmd: "readFile",
        path: filePath,
        options
      }
    });
    return Uint8Array.from(arr);
  });
}
function writeTextFile(path, contents, options) {
  return __async(this, null, function* () {
    if (typeof options === "object") {
      Object.freeze(options);
    }
    if (typeof path === "object") {
      Object.freeze(path);
    }
    const file = { path: "", contents: "" };
    let fileOptions = options;
    if (typeof path === "string") {
      file.path = path;
    } else {
      file.path = path.path;
      file.contents = path.contents;
    }
    if (typeof contents === "string") {
      file.contents = contents !== null && contents !== void 0 ? contents : "";
    } else {
      fileOptions = contents;
    }
    return invokeTauriCommand({
      __tauriModule: "Fs",
      message: {
        cmd: "writeFile",
        path: file.path,
        contents: Array.from(new TextEncoder().encode(file.contents)),
        options: fileOptions
      }
    });
  });
}
function writeBinaryFile(path, contents, options) {
  return __async(this, null, function* () {
    if (typeof options === "object") {
      Object.freeze(options);
    }
    if (typeof path === "object") {
      Object.freeze(path);
    }
    const file = { path: "", contents: [] };
    let fileOptions = options;
    if (typeof path === "string") {
      file.path = path;
    } else {
      file.path = path.path;
      file.contents = path.contents;
    }
    if (contents && "dir" in contents) {
      fileOptions = contents;
    } else if (typeof path === "string") {
      file.contents = contents !== null && contents !== void 0 ? contents : [];
    }
    return invokeTauriCommand({
      __tauriModule: "Fs",
      message: {
        cmd: "writeFile",
        path: file.path,
        contents: Array.from(file.contents instanceof ArrayBuffer ? new Uint8Array(file.contents) : file.contents),
        options: fileOptions
      }
    });
  });
}
function readDir(_0) {
  return __async(this, arguments, function* (dir, options = {}) {
    return invokeTauriCommand({
      __tauriModule: "Fs",
      message: {
        cmd: "readDir",
        path: dir,
        options
      }
    });
  });
}
function createDir(_0) {
  return __async(this, arguments, function* (dir, options = {}) {
    return invokeTauriCommand({
      __tauriModule: "Fs",
      message: {
        cmd: "createDir",
        path: dir,
        options
      }
    });
  });
}
function removeDir(_0) {
  return __async(this, arguments, function* (dir, options = {}) {
    return invokeTauriCommand({
      __tauriModule: "Fs",
      message: {
        cmd: "removeDir",
        path: dir,
        options
      }
    });
  });
}
function copyFile(_0, _1) {
  return __async(this, arguments, function* (source, destination, options = {}) {
    return invokeTauriCommand({
      __tauriModule: "Fs",
      message: {
        cmd: "copyFile",
        source,
        destination,
        options
      }
    });
  });
}
function removeFile(_0) {
  return __async(this, arguments, function* (file, options = {}) {
    return invokeTauriCommand({
      __tauriModule: "Fs",
      message: {
        cmd: "removeFile",
        path: file,
        options
      }
    });
  });
}
function renameFile(_0, _1) {
  return __async(this, arguments, function* (oldPath, newPath, options = {}) {
    return invokeTauriCommand({
      __tauriModule: "Fs",
      message: {
        cmd: "renameFile",
        oldPath,
        newPath,
        options
      }
    });
  });
}
function exists(_0) {
  return __async(this, arguments, function* (path, options = {}) {
    return invokeTauriCommand({
      __tauriModule: "Fs",
      message: {
        cmd: "exists",
        path,
        options
      }
    });
  });
}

// node_modules/@tauri-apps/api/globalShortcut.js
var globalShortcut_exports = {};
__export(globalShortcut_exports, {
  isRegistered: () => isRegistered,
  register: () => register,
  registerAll: () => registerAll,
  unregister: () => unregister,
  unregisterAll: () => unregisterAll
});
function register(shortcut, handler) {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "GlobalShortcut",
      message: {
        cmd: "register",
        shortcut,
        handler: transformCallback(handler)
      }
    });
  });
}
function registerAll(shortcuts, handler) {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "GlobalShortcut",
      message: {
        cmd: "registerAll",
        shortcuts,
        handler: transformCallback(handler)
      }
    });
  });
}
function isRegistered(shortcut) {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "GlobalShortcut",
      message: {
        cmd: "isRegistered",
        shortcut
      }
    });
  });
}
function unregister(shortcut) {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "GlobalShortcut",
      message: {
        cmd: "unregister",
        shortcut
      }
    });
  });
}
function unregisterAll() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "GlobalShortcut",
      message: {
        cmd: "unregisterAll"
      }
    });
  });
}

// node_modules/@tauri-apps/api/http.js
var http_exports = {};
__export(http_exports, {
  Body: () => Body,
  Client: () => Client,
  Response: () => Response,
  ResponseType: () => ResponseType,
  fetch: () => fetch,
  getClient: () => getClient
});
var ResponseType;
(function(ResponseType2) {
  ResponseType2[ResponseType2["JSON"] = 1] = "JSON";
  ResponseType2[ResponseType2["Text"] = 2] = "Text";
  ResponseType2[ResponseType2["Binary"] = 3] = "Binary";
})(ResponseType || (ResponseType = {}));
function formBody(data) {
  return __async(this, null, function* () {
    const form = {};
    const append = (key, v) => __async(this, null, function* () {
      if (v !== null) {
        let r;
        if (typeof v === "string") {
          r = v;
        } else if (v instanceof Uint8Array || Array.isArray(v)) {
          r = Array.from(v);
        } else if (v instanceof File) {
          r = {
            file: Array.from(new Uint8Array(yield v.arrayBuffer())),
            mime: v.type,
            fileName: v.name
          };
        } else if (typeof v.file === "string") {
          r = { file: v.file, mime: v.mime, fileName: v.fileName };
        } else {
          r = { file: Array.from(v.file), mime: v.mime, fileName: v.fileName };
        }
        form[String(key)] = r;
      }
    });
    if (data instanceof FormData) {
      for (const [key, value] of data) {
        yield append(key, value);
      }
    } else {
      for (const [key, value] of Object.entries(data)) {
        yield append(key, value);
      }
    }
    return form;
  });
}
var Body = class _Body {
  /** @ignore */
  constructor(type2, payload) {
    this.type = type2;
    this.payload = payload;
  }
  /**
   * Creates a new form data body. The form data is an object where each key is the entry name,
   * and the value is either a string or a file object.
   *
   * By default it sets the `application/x-www-form-urlencoded` Content-Type header,
   * but you can set it to `multipart/form-data` if the Cargo feature `http-multipart` is enabled.
   *
   * Note that a file path must be allowed in the `fs` allowlist scope.
   *
   * @example
   * ```typescript
   * import { Body } from "@tauri-apps/api/http"
   * const body = Body.form({
   *   key: 'value',
   *   image: {
   *     file: '/path/to/file', // either a path or an array buffer of the file contents
   *     mime: 'image/jpeg', // optional
   *     fileName: 'image.jpg' // optional
   *   }
   * });
   *
   * // alternatively, use a FormData:
   * const form = new FormData();
   * form.append('key', 'value');
   * form.append('image', file, 'image.png');
   * const formBody = Body.form(form);
   * ```
   *
   * @param data The body data.
   *
   * @returns The body object ready to be used on the POST and PUT requests.
   */
  static form(data) {
    return new _Body("Form", data);
  }
  /**
   * Creates a new JSON body.
   * @example
   * ```typescript
   * import { Body } from "@tauri-apps/api/http"
   * Body.json({
   *   registered: true,
   *   name: 'tauri'
   * });
   * ```
   *
   * @param data The body JSON object.
   *
   * @returns The body object ready to be used on the POST and PUT requests.
   */
  static json(data) {
    return new _Body("Json", data);
  }
  /**
   * Creates a new UTF-8 string body.
   * @example
   * ```typescript
   * import { Body } from "@tauri-apps/api/http"
   * Body.text('The body content as a string');
   * ```
   *
   * @param value The body string.
   *
   * @returns The body object ready to be used on the POST and PUT requests.
   */
  static text(value) {
    return new _Body("Text", value);
  }
  /**
   * Creates a new byte array body.
   * @example
   * ```typescript
   * import { Body } from "@tauri-apps/api/http"
   * Body.bytes(new Uint8Array([1, 2, 3]));
   * ```
   *
   * @param bytes The body byte array.
   *
   * @returns The body object ready to be used on the POST and PUT requests.
   */
  static bytes(bytes) {
    return new _Body("Bytes", Array.from(bytes instanceof ArrayBuffer ? new Uint8Array(bytes) : bytes));
  }
};
var Response = class {
  /** @ignore */
  constructor(response) {
    this.url = response.url;
    this.status = response.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.headers = response.headers;
    this.rawHeaders = response.rawHeaders;
    this.data = response.data;
  }
};
var Client = class {
  /** @ignore */
  constructor(id) {
    this.id = id;
  }
  /**
   * Drops the client instance.
   * @example
   * ```typescript
   * import { getClient } from '@tauri-apps/api/http';
   * const client = await getClient();
   * await client.drop();
   * ```
   */
  drop() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Http",
        message: {
          cmd: "dropClient",
          client: this.id
        }
      });
    });
  }
  /**
   * Makes an HTTP request.
   * @example
   * ```typescript
   * import { getClient } from '@tauri-apps/api/http';
   * const client = await getClient();
   * const response = await client.request({
   *   method: 'GET',
   *   url: 'http://localhost:3003/users',
   * });
   * ```
   */
  request(options) {
    return __async(this, null, function* () {
      var _a;
      const jsonResponse = !options.responseType || options.responseType === ResponseType.JSON;
      if (jsonResponse) {
        options.responseType = ResponseType.Text;
      }
      if (((_a = options.body) === null || _a === void 0 ? void 0 : _a.type) === "Form") {
        options.body.payload = yield formBody(options.body.payload);
      }
      return invokeTauriCommand({
        __tauriModule: "Http",
        message: {
          cmd: "httpRequest",
          client: this.id,
          options
        }
      }).then((res) => {
        const response = new Response(res);
        if (jsonResponse) {
          try {
            response.data = JSON.parse(response.data);
          } catch (e) {
            if (response.ok && response.data === "") {
              response.data = {};
            } else if (response.ok) {
              throw Error(`Failed to parse response \`${response.data}\` as JSON: ${e};
              try setting the \`responseType\` option to \`ResponseType.Text\` or \`ResponseType.Binary\` if the API does not return a JSON response.`);
            }
          }
          return response;
        }
        return response;
      });
    });
  }
  /**
   * Makes a GET request.
   * @example
   * ```typescript
   * import { getClient, ResponseType } from '@tauri-apps/api/http';
   * const client = await getClient();
   * const response = await client.get('http://localhost:3003/users', {
   *   timeout: 30,
   *   // the expected response type
   *   responseType: ResponseType.JSON
   * });
   * ```
   */
  get(url, options) {
    return __async(this, null, function* () {
      return this.request(__spreadValues({
        method: "GET",
        url
      }, options));
    });
  }
  /**
   * Makes a POST request.
   * @example
   * ```typescript
   * import { getClient, Body, ResponseType } from '@tauri-apps/api/http';
   * const client = await getClient();
   * const response = await client.post('http://localhost:3003/users', {
   *   body: Body.json({
   *     name: 'tauri',
   *     password: 'awesome'
   *   }),
   *   // in this case the server returns a simple string
   *   responseType: ResponseType.Text,
   * });
   * ```
   */
  post(url, body, options) {
    return __async(this, null, function* () {
      return this.request(__spreadValues({
        method: "POST",
        url,
        body
      }, options));
    });
  }
  /**
   * Makes a PUT request.
   * @example
   * ```typescript
   * import { getClient, Body } from '@tauri-apps/api/http';
   * const client = await getClient();
   * const response = await client.put('http://localhost:3003/users/1', {
   *   body: Body.form({
   *     file: {
   *       file: '/home/tauri/avatar.png',
   *       mime: 'image/png',
   *       fileName: 'avatar.png'
   *     }
   *   })
   * });
   * ```
   */
  put(url, body, options) {
    return __async(this, null, function* () {
      return this.request(__spreadValues({
        method: "PUT",
        url,
        body
      }, options));
    });
  }
  /**
   * Makes a PATCH request.
   * @example
   * ```typescript
   * import { getClient, Body } from '@tauri-apps/api/http';
   * const client = await getClient();
   * const response = await client.patch('http://localhost:3003/users/1', {
   *   body: Body.json({ email: 'contact@tauri.app' })
   * });
   * ```
   */
  patch(url, options) {
    return __async(this, null, function* () {
      return this.request(__spreadValues({
        method: "PATCH",
        url
      }, options));
    });
  }
  /**
   * Makes a DELETE request.
   * @example
   * ```typescript
   * import { getClient } from '@tauri-apps/api/http';
   * const client = await getClient();
   * const response = await client.delete('http://localhost:3003/users/1');
   * ```
   */
  delete(url, options) {
    return __async(this, null, function* () {
      return this.request(__spreadValues({
        method: "DELETE",
        url
      }, options));
    });
  }
};
function getClient(options) {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Http",
      message: {
        cmd: "createClient",
        options
      }
    }).then((id) => new Client(id));
  });
}
var defaultClient = null;
function fetch(url, options) {
  return __async(this, null, function* () {
    var _a;
    if (defaultClient === null) {
      defaultClient = yield getClient();
    }
    return defaultClient.request(__spreadValues({
      url,
      method: (_a = options === null || options === void 0 ? void 0 : options.method) !== null && _a !== void 0 ? _a : "GET"
    }, options));
  });
}

// node_modules/@tauri-apps/api/notification.js
var notification_exports = {};
__export(notification_exports, {
  isPermissionGranted: () => isPermissionGranted,
  requestPermission: () => requestPermission,
  sendNotification: () => sendNotification
});
function isPermissionGranted() {
  return __async(this, null, function* () {
    if (window.Notification.permission !== "default") {
      return Promise.resolve(window.Notification.permission === "granted");
    }
    return invokeTauriCommand({
      __tauriModule: "Notification",
      message: {
        cmd: "isNotificationPermissionGranted"
      }
    });
  });
}
function requestPermission() {
  return __async(this, null, function* () {
    return window.Notification.requestPermission();
  });
}
function sendNotification(options) {
  if (typeof options === "string") {
    new window.Notification(options);
  } else {
    new window.Notification(options.title, options);
  }
}

// node_modules/@tauri-apps/api/path.js
var path_exports = {};
__export(path_exports, {
  BaseDirectory: () => BaseDirectory,
  appCacheDir: () => appCacheDir,
  appConfigDir: () => appConfigDir,
  appDataDir: () => appDataDir,
  appDir: () => appDir,
  appLocalDataDir: () => appLocalDataDir,
  appLogDir: () => appLogDir,
  audioDir: () => audioDir,
  basename: () => basename,
  cacheDir: () => cacheDir,
  configDir: () => configDir,
  dataDir: () => dataDir,
  delimiter: () => delimiter,
  desktopDir: () => desktopDir,
  dirname: () => dirname,
  documentDir: () => documentDir,
  downloadDir: () => downloadDir,
  executableDir: () => executableDir,
  extname: () => extname,
  fontDir: () => fontDir,
  homeDir: () => homeDir,
  isAbsolute: () => isAbsolute,
  join: () => join,
  localDataDir: () => localDataDir,
  logDir: () => logDir,
  normalize: () => normalize,
  pictureDir: () => pictureDir,
  publicDir: () => publicDir,
  resolve: () => resolve,
  resolveResource: () => resolveResource,
  resourceDir: () => resourceDir,
  runtimeDir: () => runtimeDir,
  sep: () => sep,
  templateDir: () => templateDir,
  videoDir: () => videoDir
});

// node_modules/@tauri-apps/api/helpers/os-check.js
function isWindows() {
  return navigator.appVersion.includes("Win");
}

// node_modules/@tauri-apps/api/path.js
function appDir() {
  return __async(this, null, function* () {
    return appConfigDir();
  });
}
function appConfigDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.AppConfig
      }
    });
  });
}
function appDataDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.AppData
      }
    });
  });
}
function appLocalDataDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.AppLocalData
      }
    });
  });
}
function appCacheDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.AppCache
      }
    });
  });
}
function audioDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.Audio
      }
    });
  });
}
function cacheDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.Cache
      }
    });
  });
}
function configDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.Config
      }
    });
  });
}
function dataDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.Data
      }
    });
  });
}
function desktopDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.Desktop
      }
    });
  });
}
function documentDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.Document
      }
    });
  });
}
function downloadDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.Download
      }
    });
  });
}
function executableDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.Executable
      }
    });
  });
}
function fontDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.Font
      }
    });
  });
}
function homeDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.Home
      }
    });
  });
}
function localDataDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.LocalData
      }
    });
  });
}
function pictureDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.Picture
      }
    });
  });
}
function publicDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.Public
      }
    });
  });
}
function resourceDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.Resource
      }
    });
  });
}
function resolveResource(resourcePath) {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: resourcePath,
        directory: BaseDirectory.Resource
      }
    });
  });
}
function runtimeDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.Runtime
      }
    });
  });
}
function templateDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.Template
      }
    });
  });
}
function videoDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.Video
      }
    });
  });
}
function logDir() {
  return __async(this, null, function* () {
    return appLogDir();
  });
}
function appLogDir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolvePath",
        path: "",
        directory: BaseDirectory.AppLog
      }
    });
  });
}
var sep = isWindows() ? "\\" : "/";
var delimiter = isWindows() ? ";" : ":";
function resolve(...paths) {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "resolve",
        paths
      }
    });
  });
}
function normalize(path) {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "normalize",
        path
      }
    });
  });
}
function join(...paths) {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "join",
        paths
      }
    });
  });
}
function dirname(path) {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "dirname",
        path
      }
    });
  });
}
function extname(path) {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "extname",
        path
      }
    });
  });
}
function basename(path, ext) {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "basename",
        path,
        ext
      }
    });
  });
}
function isAbsolute(path) {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Path",
      message: {
        cmd: "isAbsolute",
        path
      }
    });
  });
}

// node_modules/@tauri-apps/api/process.js
var process_exports = {};
__export(process_exports, {
  exit: () => exit,
  relaunch: () => relaunch
});
function exit(exitCode = 0) {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Process",
      message: {
        cmd: "exit",
        exitCode
      }
    });
  });
}
function relaunch() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Process",
      message: {
        cmd: "relaunch"
      }
    });
  });
}

// node_modules/@tauri-apps/api/shell.js
var shell_exports = {};
__export(shell_exports, {
  Child: () => Child,
  Command: () => Command,
  EventEmitter: () => EventEmitter,
  open: () => open2
});
var EventEmitter = class {
  constructor() {
    this.eventListeners = /* @__PURE__ */ Object.create(null);
  }
  /**
   * Alias for `emitter.on(eventName, listener)`.
   *
   * @since 1.1.0
   */
  addListener(eventName, listener) {
    return this.on(eventName, listener);
  }
  /**
   * Alias for `emitter.off(eventName, listener)`.
   *
   * @since 1.1.0
   */
  removeListener(eventName, listener) {
    return this.off(eventName, listener);
  }
  /**
   * Adds the `listener` function to the end of the listeners array for the
   * event named `eventName`. No checks are made to see if the `listener` has
   * already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
   * times.
   *
   * Returns a reference to the `EventEmitter`, so that calls can be chained.
   *
   * @since 1.0.0
   */
  on(eventName, listener) {
    if (eventName in this.eventListeners) {
      this.eventListeners[eventName].push(listener);
    } else {
      this.eventListeners[eventName] = [listener];
    }
    return this;
  }
  /**
   * Adds a **one-time**`listener` function for the event named `eventName`. The
   * next time `eventName` is triggered, this listener is removed and then invoked.
   *
   * Returns a reference to the `EventEmitter`, so that calls can be chained.
   *
   * @since 1.1.0
   */
  once(eventName, listener) {
    const wrapper = (...args) => {
      this.removeListener(eventName, wrapper);
      listener(...args);
    };
    return this.addListener(eventName, wrapper);
  }
  /**
   * Removes the all specified listener from the listener array for the event eventName
   * Returns a reference to the `EventEmitter`, so that calls can be chained.
   *
   * @since 1.1.0
   */
  off(eventName, listener) {
    if (eventName in this.eventListeners) {
      this.eventListeners[eventName] = this.eventListeners[eventName].filter((l) => l !== listener);
    }
    return this;
  }
  /**
   * Removes all listeners, or those of the specified eventName.
   *
   * Returns a reference to the `EventEmitter`, so that calls can be chained.
   *
   * @since 1.1.0
   */
  removeAllListeners(event) {
    if (event) {
      delete this.eventListeners[event];
    } else {
      this.eventListeners = /* @__PURE__ */ Object.create(null);
    }
    return this;
  }
  /**
   * @ignore
   * Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
   * to each.
   *
   * @returns `true` if the event had listeners, `false` otherwise.
   */
  emit(eventName, ...args) {
    if (eventName in this.eventListeners) {
      const listeners = this.eventListeners[eventName];
      for (const listener of listeners)
        listener(...args);
      return true;
    }
    return false;
  }
  /**
   * Returns the number of listeners listening to the event named `eventName`.
   *
   * @since 1.1.0
   */
  listenerCount(eventName) {
    if (eventName in this.eventListeners)
      return this.eventListeners[eventName].length;
    return 0;
  }
  /**
   * Adds the `listener` function to the _beginning_ of the listeners array for the
   * event named `eventName`. No checks are made to see if the `listener` has
   * already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
   * times.
   *
   * Returns a reference to the `EventEmitter`, so that calls can be chained.
   *
   * @since 1.1.0
   */
  prependListener(eventName, listener) {
    if (eventName in this.eventListeners) {
      this.eventListeners[eventName].unshift(listener);
    } else {
      this.eventListeners[eventName] = [listener];
    }
    return this;
  }
  /**
   * Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
   * listener is removed, and then invoked.
   *
   * Returns a reference to the `EventEmitter`, so that calls can be chained.
   *
   * @since 1.1.0
   */
  prependOnceListener(eventName, listener) {
    const wrapper = (...args) => {
      this.removeListener(eventName, wrapper);
      listener(...args);
    };
    return this.prependListener(eventName, wrapper);
  }
};
var Child = class {
  constructor(pid) {
    this.pid = pid;
  }
  /**
   * Writes `data` to the `stdin`.
   *
   * @param data The message to write, either a string or a byte array.
   * @example
   * ```typescript
   * import { Command } from '@tauri-apps/api/shell';
   * const command = new Command('node');
   * const child = await command.spawn();
   * await child.write('message');
   * await child.write([0, 1, 2, 3, 4, 5]);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  write(data) {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Shell",
        message: {
          cmd: "stdinWrite",
          pid: this.pid,
          // correctly serialize Uint8Arrays
          buffer: typeof data === "string" ? data : Array.from(data)
        }
      });
    });
  }
  /**
   * Kills the child process.
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  kill() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Shell",
        message: {
          cmd: "killChild",
          pid: this.pid
        }
      });
    });
  }
};
var Command = class _Command extends EventEmitter {
  /**
   * Creates a new `Command` instance.
   *
   * @param program The program name to execute.
   * It must be configured on `tauri.conf.json > tauri > allowlist > shell > scope`.
   * @param args Program arguments.
   * @param options Spawn options.
   */
  constructor(program, args = [], options) {
    super();
    this.stdout = new EventEmitter();
    this.stderr = new EventEmitter();
    this.program = program;
    this.args = typeof args === "string" ? [args] : args;
    this.options = options !== null && options !== void 0 ? options : {};
  }
  /**
   * Creates a command to execute the given sidecar program.
   * @example
   * ```typescript
   * import { Command } from '@tauri-apps/api/shell';
   * const command = Command.sidecar('my-sidecar');
   * const output = await command.execute();
   * ```
   *
   * @param program The program to execute.
   * It must be configured on `tauri.conf.json > tauri > allowlist > shell > scope`.
   */
  static sidecar(program, args = [], options) {
    const instance = new _Command(program, args, options);
    instance.options.sidecar = true;
    return instance;
  }
  /**
   * Executes the command as a child process, returning a handle to it.
   *
   * @returns A promise resolving to the child process handle.
   */
  spawn() {
    return __async(this, null, function* () {
      const program = this.program;
      const args = this.args;
      const options = this.options;
      if (typeof args === "object") {
        Object.freeze(args);
      }
      const onEvent = (event) => {
        switch (event.event) {
          case "Error":
            this.emit("error", event.payload);
            break;
          case "Terminated":
            this.emit("close", event.payload);
            break;
          case "Stdout":
            this.stdout.emit("data", event.payload);
            break;
          case "Stderr":
            this.stderr.emit("data", event.payload);
            break;
        }
      };
      return invokeTauriCommand({
        __tauriModule: "Shell",
        message: {
          cmd: "execute",
          program,
          args,
          options,
          onEventFn: transformCallback(onEvent)
        }
      }).then((pid) => new Child(pid));
    });
  }
  /**
   * Executes the command as a child process, waiting for it to finish and collecting all of its output.
   * @example
   * ```typescript
   * import { Command } from '@tauri-apps/api/shell';
   * const output = await new Command('echo', 'message').execute();
   * assert(output.code === 0);
   * assert(output.signal === null);
   * assert(output.stdout === 'message');
   * assert(output.stderr === '');
   * ```
   *
   * @returns A promise resolving to the child process output.
   */
  execute() {
    return __async(this, null, function* () {
      const program = this.program;
      const args = this.args;
      const options = this.options;
      if (typeof args === "object") {
        Object.freeze(args);
      }
      return invokeTauriCommand({
        __tauriModule: "Shell",
        message: {
          cmd: "executeAndReturn",
          program,
          args,
          options
        }
      });
    });
  }
};
function open2(path, openWith) {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Shell",
      message: {
        cmd: "open",
        path,
        with: openWith
      }
    });
  });
}

// node_modules/@tauri-apps/api/updater.js
var updater_exports = {};
__export(updater_exports, {
  checkUpdate: () => checkUpdate,
  installUpdate: () => installUpdate,
  onUpdaterEvent: () => onUpdaterEvent
});
function onUpdaterEvent(handler) {
  return __async(this, null, function* () {
    return listen2(TauriEvent.STATUS_UPDATE, (data) => {
      handler(data === null || data === void 0 ? void 0 : data.payload);
    });
  });
}
function installUpdate() {
  return __async(this, null, function* () {
    let unlistenerFn;
    function cleanListener() {
      if (unlistenerFn) {
        unlistenerFn();
      }
      unlistenerFn = void 0;
    }
    return new Promise((resolve2, reject) => {
      function onStatusChange(statusResult) {
        if (statusResult.error) {
          cleanListener();
          reject(statusResult.error);
          return;
        }
        if (statusResult.status === "DONE") {
          cleanListener();
          resolve2();
        }
      }
      onUpdaterEvent(onStatusChange).then((fn) => {
        unlistenerFn = fn;
      }).catch((e) => {
        cleanListener();
        throw e;
      });
      emit2(TauriEvent.INSTALL_UPDATE).catch((e) => {
        cleanListener();
        throw e;
      });
    });
  });
}
function checkUpdate() {
  return __async(this, null, function* () {
    let unlistenerFn;
    function cleanListener() {
      if (unlistenerFn) {
        unlistenerFn();
      }
      unlistenerFn = void 0;
    }
    return new Promise((resolve2, reject) => {
      function onUpdateAvailable(manifest) {
        cleanListener();
        resolve2({
          manifest,
          shouldUpdate: true
        });
      }
      function onStatusChange(statusResult) {
        if (statusResult.error) {
          cleanListener();
          reject(statusResult.error);
          return;
        }
        if (statusResult.status === "UPTODATE") {
          cleanListener();
          resolve2({
            shouldUpdate: false
          });
        }
      }
      once2(TauriEvent.UPDATE_AVAILABLE, (data) => {
        onUpdateAvailable(data === null || data === void 0 ? void 0 : data.payload);
      }).catch((e) => {
        cleanListener();
        throw e;
      });
      onUpdaterEvent(onStatusChange).then((fn) => {
        unlistenerFn = fn;
      }).catch((e) => {
        cleanListener();
        throw e;
      });
      emit2(TauriEvent.CHECK_UPDATE).catch((e) => {
        cleanListener();
        throw e;
      });
    });
  });
}

// node_modules/@tauri-apps/api/window.js
var window_exports = {};
__export(window_exports, {
  CloseRequestedEvent: () => CloseRequestedEvent,
  LogicalPosition: () => LogicalPosition,
  LogicalSize: () => LogicalSize,
  PhysicalPosition: () => PhysicalPosition,
  PhysicalSize: () => PhysicalSize,
  UserAttentionType: () => UserAttentionType,
  WebviewWindow: () => WebviewWindow,
  WebviewWindowHandle: () => WebviewWindowHandle,
  WindowManager: () => WindowManager,
  appWindow: () => appWindow,
  availableMonitors: () => availableMonitors,
  currentMonitor: () => currentMonitor,
  getAll: () => getAll,
  getCurrent: () => getCurrent,
  primaryMonitor: () => primaryMonitor
});
var LogicalSize = class {
  constructor(width, height) {
    this.type = "Logical";
    this.width = width;
    this.height = height;
  }
};
var PhysicalSize = class {
  constructor(width, height) {
    this.type = "Physical";
    this.width = width;
    this.height = height;
  }
  /**
   * Converts the physical size to a logical one.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const factor = await appWindow.scaleFactor();
   * const size = await appWindow.innerSize();
   * const logical = size.toLogical(factor);
   * ```
   *  */
  toLogical(scaleFactor) {
    return new LogicalSize(this.width / scaleFactor, this.height / scaleFactor);
  }
};
var LogicalPosition = class {
  constructor(x, y) {
    this.type = "Logical";
    this.x = x;
    this.y = y;
  }
};
var PhysicalPosition = class {
  constructor(x, y) {
    this.type = "Physical";
    this.x = x;
    this.y = y;
  }
  /**
   * Converts the physical position to a logical one.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const factor = await appWindow.scaleFactor();
   * const position = await appWindow.innerPosition();
   * const logical = position.toLogical(factor);
   * ```
   * */
  toLogical(scaleFactor) {
    return new LogicalPosition(this.x / scaleFactor, this.y / scaleFactor);
  }
};
var UserAttentionType;
(function(UserAttentionType2) {
  UserAttentionType2[UserAttentionType2["Critical"] = 1] = "Critical";
  UserAttentionType2[UserAttentionType2["Informational"] = 2] = "Informational";
})(UserAttentionType || (UserAttentionType = {}));
function getCurrent() {
  return new WebviewWindow(window.__TAURI_METADATA__.__currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: true
  });
}
function getAll() {
  return window.__TAURI_METADATA__.__windows.map((w) => new WebviewWindow(w.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: true
  }));
}
var localTauriEvents = ["tauri://created", "tauri://error"];
var WebviewWindowHandle = class {
  constructor(label) {
    this.label = label;
    this.listeners = /* @__PURE__ */ Object.create(null);
  }
  /**
   * Listen to an event emitted by the backend or webview.
   * The event must either be a global event or an event targetting this window.
   *
   * See {@link WebviewWindow.emit | `emit`} for more information.
   *
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const unlisten = await appWindow.listen<string>('state-changed', (event) => {
   *   console.log(`Got error: ${payload}`);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param handler Event handler.
   * @returns A promise resolving to a function to unlisten to the event.
   */
  listen(event, handler) {
    return __async(this, null, function* () {
      if (this._handleTauriEvent(event, handler)) {
        return Promise.resolve(() => {
          const listeners = this.listeners[event];
          listeners.splice(listeners.indexOf(handler), 1);
        });
      }
      return listen(event, this.label, handler);
    });
  }
  /**
   * Listen to an one-off event.
   * See {@link WebviewWindow.listen | `listen`} for more information.
   *
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const unlisten = await appWindow.once<null>('initialized', (event) => {
   *   console.log(`Window initialized!`);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param handler Event handler.
   * @returns A promise resolving to a function to unlisten to the event.
   */
  once(event, handler) {
    return __async(this, null, function* () {
      if (this._handleTauriEvent(event, handler)) {
        return Promise.resolve(() => {
          const listeners = this.listeners[event];
          listeners.splice(listeners.indexOf(handler), 1);
        });
      }
      return once(event, this.label, handler);
    });
  }
  /**
   * Emits an event to the backend and all Tauri windows.
   * The event will have this window's {@link WebviewWindow.label | label} as {@link Event.windowLabel | source window label}.
   *
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.emit('window-loaded', { loggedIn: true, token: 'authToken' });
   * ```
   *
   * This function can also be used to communicate between windows:
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.listen('sync-data', (event) => { });
   *
   * // on another window...
   * import { WebviewWindow } from '@tauri-apps/api/window';
   * const otherWindow = WebviewWindow.getByLabel('other')
   * await otherWindow.emit('sync-data');
   * ```
   *
   * Global listeners are also triggered:
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * import { listen } from '@tauri-apps/api/event';
   * await listen('ping', (event) => { });
   *
   * await appWindow.emit('ping');
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param payload Event payload.
   */
  emit(event, payload) {
    return __async(this, null, function* () {
      if (localTauriEvents.includes(event)) {
        for (const handler of this.listeners[event] || []) {
          handler({ event, id: -1, windowLabel: this.label, payload });
        }
        return Promise.resolve();
      }
      return emit(event, this.label, payload);
    });
  }
  /** @ignore */
  _handleTauriEvent(event, handler) {
    if (localTauriEvents.includes(event)) {
      if (!(event in this.listeners)) {
        this.listeners[event] = [handler];
      } else {
        this.listeners[event].push(handler);
      }
      return true;
    }
    return false;
  }
};
var WindowManager = class extends WebviewWindowHandle {
  // Getters
  /**
   * The scale factor that can be used to map physical pixels to logical pixels.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const factor = await appWindow.scaleFactor();
   * ```
   *
   * @returns The window's monitor scale factor.
   * */
  scaleFactor() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "scaleFactor"
            }
          }
        }
      });
    });
  }
  /**
   * The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const position = await appWindow.innerPosition();
   * ```
   *
   * @returns The window's inner position.
   *  */
  innerPosition() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "innerPosition"
            }
          }
        }
      }).then(({ x, y }) => new PhysicalPosition(x, y));
    });
  }
  /**
   * The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const position = await appWindow.outerPosition();
   * ```
   *
   * @returns The window's outer position.
   *  */
  outerPosition() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "outerPosition"
            }
          }
        }
      }).then(({ x, y }) => new PhysicalPosition(x, y));
    });
  }
  /**
   * The physical size of the window's client area.
   * The client area is the content of the window, excluding the title bar and borders.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const size = await appWindow.innerSize();
   * ```
   *
   * @returns The window's inner size.
   */
  innerSize() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "innerSize"
            }
          }
        }
      }).then(({ width, height }) => new PhysicalSize(width, height));
    });
  }
  /**
   * The physical size of the entire window.
   * These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const size = await appWindow.outerSize();
   * ```
   *
   * @returns The window's outer size.
   */
  outerSize() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "outerSize"
            }
          }
        }
      }).then(({ width, height }) => new PhysicalSize(width, height));
    });
  }
  /**
   * Gets the window's current fullscreen state.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const fullscreen = await appWindow.isFullscreen();
   * ```
   *
   * @returns Whether the window is in fullscreen mode or not.
   *  */
  isFullscreen() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "isFullscreen"
            }
          }
        }
      });
    });
  }
  /**
   * Gets the window's current minimized state.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const minimized = await appWindow.isMinimized();
   * ```
   *
   * @since 1.3.0
   * */
  isMinimized() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "isMinimized"
            }
          }
        }
      });
    });
  }
  /**
   * Gets the window's current maximized state.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const maximized = await appWindow.isMaximized();
   * ```
   *
   * @returns Whether the window is maximized or not.
   * */
  isMaximized() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "isMaximized"
            }
          }
        }
      });
    });
  }
  /**
   * Gets the window's current focus state.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const focused = await appWindow.isFocused();
   * ```
   *
   * @returns Whether the window is focused or not.
   *
   * @since 1.4
   * */
  isFocused() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "isFocused"
            }
          }
        }
      });
    });
  }
  /**
   * Gets the window's current decorated state.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const decorated = await appWindow.isDecorated();
   * ```
   *
   * @returns Whether the window is decorated or not.
   *  */
  isDecorated() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "isDecorated"
            }
          }
        }
      });
    });
  }
  /**
   * Gets the window's current resizable state.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const resizable = await appWindow.isResizable();
   * ```
   *
   * @returns Whether the window is resizable or not.
   *  */
  isResizable() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "isResizable"
            }
          }
        }
      });
    });
  }
  /**
   * Gets the window’s native maximize button state.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const maximizable = await appWindow.isMaximizable();
   * ```
   *
   * @returns Whether the window's native maximize button is enabled or not.
   *  */
  isMaximizable() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "isMaximizable"
            }
          }
        }
      });
    });
  }
  /**
   * Gets the window’s native minimize button state.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const minimizable = await appWindow.isMinimizable();
   * ```
   *
   * @returns Whether the window's native minimize button is enabled or not.
   *  */
  isMinimizable() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "isMinimizable"
            }
          }
        }
      });
    });
  }
  /**
   * Gets the window’s native close button state.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const closable = await appWindow.isClosable();
   * ```
   *
   * @returns Whether the window's native close button is enabled or not.
   *  */
  isClosable() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "isClosable"
            }
          }
        }
      });
    });
  }
  /**
   * Gets the window's current visible state.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const visible = await appWindow.isVisible();
   * ```
   *
   * @returns Whether the window is visible or not.
   *  */
  isVisible() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "isVisible"
            }
          }
        }
      });
    });
  }
  /**
   * Gets the window's current title.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const title = await appWindow.title();
   * ```
   *
   * @since 1.3.0
   * */
  title() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "title"
            }
          }
        }
      });
    });
  }
  /**
   * Gets the window's current theme.
   *
   * #### Platform-specific
   *
   * - **macOS:** Theme was introduced on macOS 10.14. Returns `light` on macOS 10.13 and below.
   *
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * const theme = await appWindow.theme();
   * ```
   *
   * @returns The window theme.
   * */
  theme() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "theme"
            }
          }
        }
      });
    });
  }
  // Setters
  /**
   * Centers the window.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.center();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  center() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "center"
            }
          }
        }
      });
    });
  }
  /**
   *  Requests user attention to the window, this has no effect if the application
   * is already focused. How requesting for user attention manifests is platform dependent,
   * see `UserAttentionType` for details.
   *
   * Providing `null` will unset the request for user attention. Unsetting the request for
   * user attention might not be done automatically by the WM when the window receives input.
   *
   * #### Platform-specific
   *
   * - **macOS:** `null` has no effect.
   * - **Linux:** Urgency levels have the same effect.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.requestUserAttention();
   * ```
   *
   * @param requestType
   * @returns A promise indicating the success or failure of the operation.
   */
  requestUserAttention(requestType) {
    return __async(this, null, function* () {
      let requestType_ = null;
      if (requestType) {
        if (requestType === UserAttentionType.Critical) {
          requestType_ = { type: "Critical" };
        } else {
          requestType_ = { type: "Informational" };
        }
      }
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "requestUserAttention",
              payload: requestType_
            }
          }
        }
      });
    });
  }
  /**
   * Updates the window resizable flag.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.setResizable(false);
   * ```
   *
   * @param resizable
   * @returns A promise indicating the success or failure of the operation.
   */
  setResizable(resizable) {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setResizable",
              payload: resizable
            }
          }
        }
      });
    });
  }
  /**
   * Sets whether the window's native maximize button is enabled or not.
   * If resizable is set to false, this setting is ignored.
   *
   * #### Platform-specific
   *
   * - **macOS:** Disables the "zoom" button in the window titlebar, which is also used to enter fullscreen mode.
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.setMaximizable(false);
   * ```
   *
   * @param maximizable
   * @returns A promise indicating the success or failure of the operation.
   */
  setMaximizable(maximizable) {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setMaximizable",
              payload: maximizable
            }
          }
        }
      });
    });
  }
  /**
   * Sets whether the window's native minimize button is enabled or not.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.setMinimizable(false);
   * ```
   *
   * @param minimizable
   * @returns A promise indicating the success or failure of the operation.
   */
  setMinimizable(minimizable) {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setMinimizable",
              payload: minimizable
            }
          }
        }
      });
    });
  }
  /**
   * Sets whether the window's native close button is enabled or not.
   *
   * #### Platform-specific
   *
   * - **Linux:** GTK+ will do its best to convince the window manager not to show a close button. Depending on the system, this function may not have any effect when called on a window that is already visible
   * - **iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.setClosable(false);
   * ```
   *
   * @param closable
   * @returns A promise indicating the success or failure of the operation.
   */
  setClosable(closable) {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setClosable",
              payload: closable
            }
          }
        }
      });
    });
  }
  /**
   * Sets the window title.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.setTitle('Tauri');
   * ```
   *
   * @param title The new title
   * @returns A promise indicating the success or failure of the operation.
   */
  setTitle(title) {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setTitle",
              payload: title
            }
          }
        }
      });
    });
  }
  /**
   * Maximizes the window.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.maximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  maximize() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "maximize"
            }
          }
        }
      });
    });
  }
  /**
   * Unmaximizes the window.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.unmaximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  unmaximize() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "unmaximize"
            }
          }
        }
      });
    });
  }
  /**
   * Toggles the window maximized state.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.toggleMaximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  toggleMaximize() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "toggleMaximize"
            }
          }
        }
      });
    });
  }
  /**
   * Minimizes the window.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.minimize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  minimize() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "minimize"
            }
          }
        }
      });
    });
  }
  /**
   * Unminimizes the window.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.unminimize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  unminimize() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "unminimize"
            }
          }
        }
      });
    });
  }
  /**
   * Sets the window visibility to true.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.show();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  show() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "show"
            }
          }
        }
      });
    });
  }
  /**
   * Sets the window visibility to false.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.hide();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  hide() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "hide"
            }
          }
        }
      });
    });
  }
  /**
   * Closes the window.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.close();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  close() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "close"
            }
          }
        }
      });
    });
  }
  /**
   * Whether the window should have borders and bars.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.setDecorations(false);
   * ```
   *
   * @param decorations Whether the window should have borders and bars.
   * @returns A promise indicating the success or failure of the operation.
   */
  setDecorations(decorations) {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setDecorations",
              payload: decorations
            }
          }
        }
      });
    });
  }
  /**
   * Whether the window should always be on top of other windows.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.setAlwaysOnTop(true);
   * ```
   *
   * @param alwaysOnTop Whether the window should always be on top of other windows or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  setAlwaysOnTop(alwaysOnTop) {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setAlwaysOnTop",
              payload: alwaysOnTop
            }
          }
        }
      });
    });
  }
  /**
   * Prevents the window contents from being captured by other apps.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.setContentProtected(true);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 1.2.0
   */
  setContentProtected(protected_) {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setContentProtected",
              payload: protected_
            }
          }
        }
      });
    });
  }
  /**
   * Resizes the window with a new inner size.
   * @example
   * ```typescript
   * import { appWindow, LogicalSize } from '@tauri-apps/api/window';
   * await appWindow.setSize(new LogicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size.
   * @returns A promise indicating the success or failure of the operation.
   */
  setSize(size) {
    return __async(this, null, function* () {
      if (!size || size.type !== "Logical" && size.type !== "Physical") {
        throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");
      }
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setSize",
              payload: {
                type: size.type,
                data: {
                  width: size.width,
                  height: size.height
                }
              }
            }
          }
        }
      });
    });
  }
  /**
   * Sets the window minimum inner size. If the `size` argument is not provided, the constraint is unset.
   * @example
   * ```typescript
   * import { appWindow, PhysicalSize } from '@tauri-apps/api/window';
   * await appWindow.setMinSize(new PhysicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  setMinSize(size) {
    return __async(this, null, function* () {
      if (size && size.type !== "Logical" && size.type !== "Physical") {
        throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");
      }
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setMinSize",
              payload: size ? {
                type: size.type,
                data: {
                  width: size.width,
                  height: size.height
                }
              } : null
            }
          }
        }
      });
    });
  }
  /**
   * Sets the window maximum inner size. If the `size` argument is undefined, the constraint is unset.
   * @example
   * ```typescript
   * import { appWindow, LogicalSize } from '@tauri-apps/api/window';
   * await appWindow.setMaxSize(new LogicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  setMaxSize(size) {
    return __async(this, null, function* () {
      if (size && size.type !== "Logical" && size.type !== "Physical") {
        throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");
      }
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setMaxSize",
              payload: size ? {
                type: size.type,
                data: {
                  width: size.width,
                  height: size.height
                }
              } : null
            }
          }
        }
      });
    });
  }
  /**
   * Sets the window outer position.
   * @example
   * ```typescript
   * import { appWindow, LogicalPosition } from '@tauri-apps/api/window';
   * await appWindow.setPosition(new LogicalPosition(600, 500));
   * ```
   *
   * @param position The new position, in logical or physical pixels.
   * @returns A promise indicating the success or failure of the operation.
   */
  setPosition(position) {
    return __async(this, null, function* () {
      if (!position || position.type !== "Logical" && position.type !== "Physical") {
        throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");
      }
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setPosition",
              payload: {
                type: position.type,
                data: {
                  x: position.x,
                  y: position.y
                }
              }
            }
          }
        }
      });
    });
  }
  /**
   * Sets the window fullscreen state.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.setFullscreen(true);
   * ```
   *
   * @param fullscreen Whether the window should go to fullscreen or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  setFullscreen(fullscreen) {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setFullscreen",
              payload: fullscreen
            }
          }
        }
      });
    });
  }
  /**
   * Bring the window to front and focus.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.setFocus();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  setFocus() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setFocus"
            }
          }
        }
      });
    });
  }
  /**
   * Sets the window icon.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.setIcon('/tauri/awesome.png');
   * ```
   *
   * Note that you need the `icon-ico` or `icon-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "icon-png"] }
   * ```
   *
   * @param icon Icon bytes or path to the icon file.
   * @returns A promise indicating the success or failure of the operation.
   */
  setIcon(icon) {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setIcon",
              payload: {
                // correctly serialize Uint8Arrays
                icon: typeof icon === "string" ? icon : Array.from(icon)
              }
            }
          }
        }
      });
    });
  }
  /**
   * Whether the window icon should be hidden from the taskbar or not.
   *
   * #### Platform-specific
   *
   * - **macOS:** Unsupported.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.setSkipTaskbar(true);
   * ```
   *
   * @param skip true to hide window icon, false to show it.
   * @returns A promise indicating the success or failure of the operation.
   */
  setSkipTaskbar(skip) {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setSkipTaskbar",
              payload: skip
            }
          }
        }
      });
    });
  }
  /**
   * Grabs the cursor, preventing it from leaving the window.
   *
   * There's no guarantee that the cursor will be hidden. You should
   * hide it by yourself if you want so.
   *
   * #### Platform-specific
   *
   * - **Linux:** Unsupported.
   * - **macOS:** This locks the cursor in a fixed location, which looks visually awkward.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.setCursorGrab(true);
   * ```
   *
   * @param grab `true` to grab the cursor icon, `false` to release it.
   * @returns A promise indicating the success or failure of the operation.
   */
  setCursorGrab(grab) {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setCursorGrab",
              payload: grab
            }
          }
        }
      });
    });
  }
  /**
   * Modifies the cursor's visibility.
   *
   * #### Platform-specific
   *
   * - **Windows:** The cursor is only hidden within the confines of the window.
   * - **macOS:** The cursor is hidden as long as the window has input focus, even if the cursor is
   *   outside of the window.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.setCursorVisible(false);
   * ```
   *
   * @param visible If `false`, this will hide the cursor. If `true`, this will show the cursor.
   * @returns A promise indicating the success or failure of the operation.
   */
  setCursorVisible(visible) {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setCursorVisible",
              payload: visible
            }
          }
        }
      });
    });
  }
  /**
   * Modifies the cursor icon of the window.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.setCursorIcon('help');
   * ```
   *
   * @param icon The new cursor icon.
   * @returns A promise indicating the success or failure of the operation.
   */
  setCursorIcon(icon) {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setCursorIcon",
              payload: icon
            }
          }
        }
      });
    });
  }
  /**
   * Changes the position of the cursor in window coordinates.
   * @example
   * ```typescript
   * import { appWindow, LogicalPosition } from '@tauri-apps/api/window';
   * await appWindow.setCursorPosition(new LogicalPosition(600, 300));
   * ```
   *
   * @param position The new cursor position.
   * @returns A promise indicating the success or failure of the operation.
   */
  setCursorPosition(position) {
    return __async(this, null, function* () {
      if (!position || position.type !== "Logical" && position.type !== "Physical") {
        throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");
      }
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setCursorPosition",
              payload: {
                type: position.type,
                data: {
                  x: position.x,
                  y: position.y
                }
              }
            }
          }
        }
      });
    });
  }
  /**
   * Changes the cursor events behavior.
   *
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.setIgnoreCursorEvents(true);
   * ```
   *
   * @param ignore `true` to ignore the cursor events; `false` to process them as usual.
   * @returns A promise indicating the success or failure of the operation.
   */
  setIgnoreCursorEvents(ignore) {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "setIgnoreCursorEvents",
              payload: ignore
            }
          }
        }
      });
    });
  }
  /**
   * Starts dragging the window.
   * @example
   * ```typescript
   * import { appWindow } from '@tauri-apps/api/window';
   * await appWindow.startDragging();
   * ```
   *
   * @return A promise indicating the success or failure of the operation.
   */
  startDragging() {
    return __async(this, null, function* () {
      return invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            label: this.label,
            cmd: {
              type: "startDragging"
            }
          }
        }
      });
    });
  }
  // Listeners
  /**
   * Listen to window resize.
   *
   * @example
   * ```typescript
   * import { appWindow } from "@tauri-apps/api/window";
   * const unlisten = await appWindow.onResized(({ payload: size }) => {
   *  console.log('Window resized', size);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   *
   * @since 1.0.2
   */
  onResized(handler) {
    return __async(this, null, function* () {
      return this.listen(TauriEvent.WINDOW_RESIZED, (e) => {
        e.payload = mapPhysicalSize(e.payload);
        handler(e);
      });
    });
  }
  /**
   * Listen to window move.
   *
   * @example
   * ```typescript
   * import { appWindow } from "@tauri-apps/api/window";
   * const unlisten = await appWindow.onMoved(({ payload: position }) => {
   *  console.log('Window moved', position);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   *
   * @since 1.0.2
   */
  onMoved(handler) {
    return __async(this, null, function* () {
      return this.listen(TauriEvent.WINDOW_MOVED, (e) => {
        e.payload = mapPhysicalPosition(e.payload);
        handler(e);
      });
    });
  }
  /**
   * Listen to window close requested. Emitted when the user requests to closes the window.
   *
   * @example
   * ```typescript
   * import { appWindow } from "@tauri-apps/api/window";
   * import { confirm } from '@tauri-apps/api/dialog';
   * const unlisten = await appWindow.onCloseRequested(async (event) => {
   *   const confirmed = await confirm('Are you sure?');
   *   if (!confirmed) {
   *     // user did not confirm closing the window; let's prevent it
   *     event.preventDefault();
   *   }
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   *
   * @since 1.0.2
   */
  /* eslint-disable @typescript-eslint/promise-function-async */
  onCloseRequested(handler) {
    return __async(this, null, function* () {
      return this.listen(TauriEvent.WINDOW_CLOSE_REQUESTED, (event) => {
        const evt = new CloseRequestedEvent(event);
        void Promise.resolve(handler(evt)).then(() => {
          if (!evt.isPreventDefault()) {
            return this.close();
          }
        });
      });
    });
  }
  /* eslint-enable */
  /**
   * Listen to window focus change.
   *
   * @example
   * ```typescript
   * import { appWindow } from "@tauri-apps/api/window";
   * const unlisten = await appWindow.onFocusChanged(({ payload: focused }) => {
   *  console.log('Focus changed, window is focused? ' + focused);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   *
   * @since 1.0.2
   */
  onFocusChanged(handler) {
    return __async(this, null, function* () {
      const unlistenFocus = yield this.listen(TauriEvent.WINDOW_FOCUS, (event) => {
        handler(__spreadProps(__spreadValues({}, event), { payload: true }));
      });
      const unlistenBlur = yield this.listen(TauriEvent.WINDOW_BLUR, (event) => {
        handler(__spreadProps(__spreadValues({}, event), { payload: false }));
      });
      return () => {
        unlistenFocus();
        unlistenBlur();
      };
    });
  }
  /**
   * Listen to window scale change. Emitted when the window's scale factor has changed.
   * The following user actions can cause DPI changes:
   * - Changing the display's resolution.
   * - Changing the display's scale factor (e.g. in Control Panel on Windows).
   * - Moving the window to a display with a different scale factor.
   *
   * @example
   * ```typescript
   * import { appWindow } from "@tauri-apps/api/window";
   * const unlisten = await appWindow.onScaleChanged(({ payload }) => {
   *  console.log('Scale changed', payload.scaleFactor, payload.size);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   *
   * @since 1.0.2
   */
  onScaleChanged(handler) {
    return __async(this, null, function* () {
      return this.listen(TauriEvent.WINDOW_SCALE_FACTOR_CHANGED, handler);
    });
  }
  /**
   * Listen to the window menu item click. The payload is the item id.
   *
   * @example
   * ```typescript
   * import { appWindow } from "@tauri-apps/api/window";
   * const unlisten = await appWindow.onMenuClicked(({ payload: menuId }) => {
   *  console.log('Menu clicked: ' + menuId);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   *
   * @since 1.0.2
   */
  onMenuClicked(handler) {
    return __async(this, null, function* () {
      return this.listen(TauriEvent.MENU, handler);
    });
  }
  /**
   * Listen to a file drop event.
   * The listener is triggered when the user hovers the selected files on the window,
   * drops the files or cancels the operation.
   *
   * @example
   * ```typescript
   * import { appWindow } from "@tauri-apps/api/window";
   * const unlisten = await appWindow.onFileDropEvent((event) => {
   *  if (event.payload.type === 'hover') {
   *    console.log('User hovering', event.payload.paths);
   *  } else if (event.payload.type === 'drop') {
   *    console.log('User dropped', event.payload.paths);
   *  } else {
   *    console.log('File drop cancelled');
   *  }
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   *
   * @since 1.0.2
   */
  onFileDropEvent(handler) {
    return __async(this, null, function* () {
      const unlistenFileDrop = yield this.listen(TauriEvent.WINDOW_FILE_DROP, (event) => {
        handler(__spreadProps(__spreadValues({}, event), { payload: { type: "drop", paths: event.payload } }));
      });
      const unlistenFileHover = yield this.listen(TauriEvent.WINDOW_FILE_DROP_HOVER, (event) => {
        handler(__spreadProps(__spreadValues({}, event), { payload: { type: "hover", paths: event.payload } }));
      });
      const unlistenCancel = yield this.listen(TauriEvent.WINDOW_FILE_DROP_CANCELLED, (event) => {
        handler(__spreadProps(__spreadValues({}, event), { payload: { type: "cancel" } }));
      });
      return () => {
        unlistenFileDrop();
        unlistenFileHover();
        unlistenCancel();
      };
    });
  }
  /**
   * Listen to the system theme change.
   *
   * @example
   * ```typescript
   * import { appWindow } from "@tauri-apps/api/window";
   * const unlisten = await appWindow.onThemeChanged(({ payload: theme }) => {
   *  console.log('New theme: ' + theme);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   *
   * @since 1.0.2
   */
  onThemeChanged(handler) {
    return __async(this, null, function* () {
      return this.listen(TauriEvent.WINDOW_THEME_CHANGED, handler);
    });
  }
};
var CloseRequestedEvent = class {
  constructor(event) {
    this._preventDefault = false;
    this.event = event.event;
    this.windowLabel = event.windowLabel;
    this.id = event.id;
  }
  preventDefault() {
    this._preventDefault = true;
  }
  isPreventDefault() {
    return this._preventDefault;
  }
};
var WebviewWindow = class _WebviewWindow extends WindowManager {
  /**
   * Creates a new WebviewWindow.
   * @example
   * ```typescript
   * import { WebviewWindow } from '@tauri-apps/api/window';
   * const webview = new WebviewWindow('my-label', {
   *   url: 'https://github.com/tauri-apps/tauri'
   * });
   * webview.once('tauri://created', function () {
   *  // webview window successfully created
   * });
   * webview.once('tauri://error', function (e) {
   *  // an error happened creating the webview window
   * });
   * ```
   *
   * * @param label The unique webview window label. Must be alphanumeric: `a-zA-Z-/:_`.
   * @returns The WebviewWindow instance to communicate with the webview.
   */
  constructor(label, options = {}) {
    super(label);
    if (!(options === null || options === void 0 ? void 0 : options.skip)) {
      invokeTauriCommand({
        __tauriModule: "Window",
        message: {
          cmd: "createWebview",
          data: {
            options: __spreadValues({
              label
            }, options)
          }
        }
      }).then(() => __async(this, null, function* () {
        return this.emit("tauri://created");
      })).catch((e) => __async(this, null, function* () {
        return this.emit("tauri://error", e);
      }));
    }
  }
  /**
   * Gets the WebviewWindow for the webview associated with the given label.
   * @example
   * ```typescript
   * import { WebviewWindow } from '@tauri-apps/api/window';
   * const mainWindow = WebviewWindow.getByLabel('main');
   * ```
   *
   * @param label The webview window label.
   * @returns The WebviewWindow instance to communicate with the webview or null if the webview doesn't exist.
   */
  static getByLabel(label) {
    if (getAll().some((w) => w.label === label)) {
      return new _WebviewWindow(label, { skip: true });
    }
    return null;
  }
  /**
   *  Gets the focused window.
   * @example
   * ```typescript
   * import { WebviewWindow } from '@tauri-apps/api/window';
   * const focusedWindow = WebviewWindow.getFocusedWindow();
   * ```
   *
   * @returns The WebviewWindow instance to communicate with the webview or `undefined` if there is not any focused window.
   *
   * @since 1.4
   */
  static getFocusedWindow() {
    return __async(this, null, function* () {
      for (const w of getAll()) {
        if (yield w.isFocused()) {
          return w;
        }
      }
      return null;
    });
  }
};
var appWindow;
if ("__TAURI_METADATA__" in window) {
  appWindow = new WebviewWindow(window.__TAURI_METADATA__.__currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: true
  });
} else {
  console.warn(`Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.
Note that this is not an issue if running this frontend on a browser instead of a Tauri window.`);
  appWindow = new WebviewWindow("main", {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: true
  });
}
function mapMonitor(m) {
  return m === null ? null : {
    name: m.name,
    scaleFactor: m.scaleFactor,
    position: mapPhysicalPosition(m.position),
    size: mapPhysicalSize(m.size)
  };
}
function mapPhysicalPosition(m) {
  return new PhysicalPosition(m.x, m.y);
}
function mapPhysicalSize(m) {
  return new PhysicalSize(m.width, m.height);
}
function currentMonitor() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: {
          cmd: {
            type: "currentMonitor"
          }
        }
      }
    }).then(mapMonitor);
  });
}
function primaryMonitor() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: {
          cmd: {
            type: "primaryMonitor"
          }
        }
      }
    }).then(mapMonitor);
  });
}
function availableMonitors() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Window",
      message: {
        cmd: "manage",
        data: {
          cmd: {
            type: "availableMonitors"
          }
        }
      }
    }).then((ms) => ms.map(mapMonitor));
  });
}

// node_modules/@tauri-apps/api/os.js
var os_exports = {};
__export(os_exports, {
  EOL: () => EOL,
  arch: () => arch,
  locale: () => locale,
  platform: () => platform,
  tempdir: () => tempdir,
  type: () => type,
  version: () => version
});
var EOL = isWindows() ? "\r\n" : "\n";
function platform() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Os",
      message: {
        cmd: "platform"
      }
    });
  });
}
function version() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Os",
      message: {
        cmd: "version"
      }
    });
  });
}
function type() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Os",
      message: {
        cmd: "osType"
      }
    });
  });
}
function arch() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Os",
      message: {
        cmd: "arch"
      }
    });
  });
}
function tempdir() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Os",
      message: {
        cmd: "tempdir"
      }
    });
  });
}
function locale() {
  return __async(this, null, function* () {
    return invokeTauriCommand({
      __tauriModule: "Os",
      message: {
        cmd: "locale"
      }
    });
  });
}

// node_modules/@tauri-apps/api/index.js
var invoke2 = invoke;
export {
  app_exports as app,
  cli_exports as cli,
  clipboard_exports as clipboard,
  dialog_exports as dialog,
  event_exports as event,
  fs_exports as fs,
  globalShortcut_exports as globalShortcut,
  http_exports as http,
  invoke2 as invoke,
  notification_exports as notification,
  os_exports as os,
  path_exports as path,
  process_exports as process,
  shell_exports as shell,
  tauri_exports as tauri,
  updater_exports as updater,
  window_exports as window
};
//# sourceMappingURL=@tauri-apps_api.js.map

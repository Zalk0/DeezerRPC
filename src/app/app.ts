import { Client } from "discord-rpc";
import { BrowserWindow } from "electron";
import ElectronStore from "electron-store";

// @ts-expect-error don't enable resolveJsonModule because it adds a src directory in build/
import Package from "../../package.json";

// Global
declare global {
    var __mainWindow: BrowserWindow; //eslint-disable-line no-var
}

// App
export const APP = {
    name: "DeezerRPC",
    version: Package.version,
    homepage: Package.homepage,
    packageUrl:
        "https://raw.githubusercontent.com/Zalk0/DeezerRPC/main/package.json",
    appId: "com.zalko.deezerrpc",
    settings: {
        windowWidth: 1280,
        windowHeight: 720,
        deezerUrl: "https://www.deezer.com/login",
        discordClientID: "1173321053766963310",
    },
    preferences: {
        closeToTray: "closeToTray",
        minimizeToTray: "minimizeToTray",
        checkUpdates: "checkUpdates",
    },
};

export const APP_CONFIG = new ElectronStore({
    defaults: {
        closeToTray: false,
        minimizeToTray: false,
        checkUpdates: true,
    },
});

// RPC
export const RPC = new Client({
    transport: "ipc",
});

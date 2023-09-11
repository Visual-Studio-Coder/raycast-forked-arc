/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-history` command */
  export type SearchHistory = ExtensionPreferences & {}
  /** Preferences accessible in the `new-window` command */
  export type NewWindow = ExtensionPreferences & {}
  /** Preferences accessible in the `new-blank-window` command */
  export type NewBlankWindow = ExtensionPreferences & {}
  /** Preferences accessible in the `new-little-arc` command */
  export type NewLittleArc = ExtensionPreferences & {
  /** URL - The URL to open in the new tab */
  "url": string
}
  /** Preferences accessible in the `search-spaces` command */
  export type SearchSpaces = ExtensionPreferences & {}
  /** Preferences accessible in the `search-tabs` command */
  export type SearchTabs = ExtensionPreferences & {}
  /** Preferences accessible in the `new-incognito-window` command */
  export type NewIncognitoWindow = ExtensionPreferences & {}
  /** Preferences accessible in the `new-tab` command */
  export type NewTab = ExtensionPreferences & {
  /** URL - The URL to open in the new tab */
  "url"?: string
}
  /** Preferences accessible in the `menu-bar` command */
  export type MenuBar = ExtensionPreferences & {}
  /** Preferences accessible in the `search` command */
  export type Search = ExtensionPreferences & {
  /** Search Engine - Search engine used for suggestions */
  "engine": "google" | "duckduckgo" | "bing" | "yahoo" | "ecosia",
  /** Sorting - Sorting of sections in search results */
  "sorting": "tabsHistorySuggestions" | "historyTabsSuggestions",
  /** Sections - Show favorites in search results */
  "showFavorites": boolean,
  /**  - Show pinned tabs in search results */
  "showPinnedTabs": boolean,
  /**  - Show unpinned tabs in search results */
  "showUnpinnedTabs": boolean,
  /**  - Show history in search results */
  "showHistory": boolean,
  /**  - Show suggestions in search results */
  "showSuggestions": boolean
}
}

declare namespace Arguments {
  /** Arguments passed to the `search-history` command */
  export type SearchHistory = {}
  /** Arguments passed to the `new-window` command */
  export type NewWindow = {}
  /** Arguments passed to the `new-blank-window` command */
  export type NewBlankWindow = {}
  /** Arguments passed to the `new-little-arc` command */
  export type NewLittleArc = {
  /** URL */
  "url": string
}
  /** Arguments passed to the `search-spaces` command */
  export type SearchSpaces = {}
  /** Arguments passed to the `search-tabs` command */
  export type SearchTabs = {}
  /** Arguments passed to the `new-incognito-window` command */
  export type NewIncognitoWindow = {}
  /** Arguments passed to the `new-tab` command */
  export type NewTab = {
  /** URL */
  "url": string
}
  /** Arguments passed to the `menu-bar` command */
  export type MenuBar = {}
  /** Arguments passed to the `search` command */
  export type Search = {}
}

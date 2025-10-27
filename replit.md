# Overview

This is a Facebook Messenger chatbot built on the Mirai framework, designed to interact with users through various commands and automated responses. The bot is named "Lunar Krystal Bot" and provides entertainment, utility, and social features through Facebook's messaging platform. It's a Vietnamese-language bot with extensive command modules, event handlers, and media capabilities.

The system is built using Node.js and uses an unofficial Facebook Chat API (`@dongdev/fca-unofficial`) to connect to Facebook Messenger. It includes a SQLite database for persistent storage, automatic restart capabilities, and a web server for uptime monitoring.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Core Framework
- **Bot Framework**: Custom Mirai-based bot framework with modular command and event system
- **Entry Point**: `index.js` serves as the process manager, spawning `main.js` as a child process with automatic restart capabilities
- **Main Logic**: `main.js` handles initialization, loading commands/events, and coordinating between the API and bot logic

## Command & Event System
- **Modular Architecture**: Commands and events are loaded dynamically from separate files
- **Global State Management**: Uses `global.client` object to store commands, events, cooldowns, and handlers (reactions, replies, schedules)
- **Time Utilities**: Built-in timezone support for Manila/Asia region with formatted time accessors
- **Storage Maps**: Thread data, user data, and currencies stored in Map objects for fast in-memory access

## Authentication & Session Management
- **AppState Storage**: Facebook session credentials stored in `appstate.json`
- **Login Configuration**: Extensive FCA (Facebook Chat API) options in `FastConfigFca.json` including:
  - Auto-login capabilities
  - Checkpoint bypass features
  - Anti-stuck and memory leak prevention
  - Automatic restart timers
  - MQTT connection management
  - Websocket extension support

## Data Persistence
- **Database**: SQLite using Sequelize ORM
- **Models**: Three primary models - Users, Threads, and Currencies
- **Database Location**: Configured via `config.json` with path `antists.sqlite`
- **Auto-creation**: Database tables auto-sync on startup

## Controller Pattern
- **Users Controller**: Manages user data retrieval, name caching, and Facebook profile information
- **Threads Controller**: Handles group/thread metadata and settings
- **Currencies Controller**: Manages user currency/points system

## Configuration Management
- **Main Config** (`config.json`): Bot settings, admin IDs, prefix, notifications, and feature toggles
- **FCA Config** (`FastConfigFca.json`): Facebook API connection settings, auto-update, encryption, and stability features
- **Multi-language Support**: Vietnamese language default with configurable language settings

## Logging System
- **Styled Console Output**: Uses chalk and gradient-string for colored, visually distinct log messages
- **Log Levels**: Standard warn/error patterns plus custom loader messages with unique branding

## Content Storage
- **JSON Data Files**: Extensive image/media URLs stored in JSON files (`includes/datajson/`) for various anime characters and content types
- **Categories**: Anime girls (chitanda, gura, kana, kurumi, loli, mirai, rem, sagiri, siesta, umaru), scenery, poetry, and NSFW content

## Auto-restart & Monitoring
- **Process Management**: Parent process monitors child with automatic restart on code exit 1
- **Timed Restart**: Configurable minute-based automatic restarts to prevent memory leaks
- **Express Server**: Simple HTTP server on port 5000 for uptime monitoring and health checks

## Design Patterns
- **Singleton Pattern**: Global objects for client state and data storage
- **Module Pattern**: Commands and events as separate modules with standardized exports
- **Controller Pattern**: Separate controllers for database models
- **Observer Pattern**: Event-driven architecture for message handling and reactions

## Security Features
- **Obfuscated Code**: ConnectApi.js is obfuscated for protection
- **Encryption Options**: Built-in encryption features for sensitive data
- **Admin Controls**: Multi-level admin system (ADMINBOT, NDH arrays)
- **Command Disabling**: Ability to disable specific commands or events

# External Dependencies

## Primary Dependencies
- **Facebook API**: `@dongdev/fca-unofficial` - Unofficial Facebook Chat API for bot connectivity
- **Database**: `better-sqlite3` v7.6.2 and `sequelize` - SQLite database with ORM
- **Web Framework**: `express` v4.18.2 - HTTP server for monitoring
- **AI Integration**: `@google/generative-ai` v0.17.0 - Google's Generative AI (Gemini)

## Media & Content Processing
- **Image Processing**: `canvas` v2.11.2, `jimp` v0.22.8 - Image manipulation and generation
- **Web Scraping**: `cheerio` v1.0.0-rc.12 - HTML parsing for data extraction
- **File Operations**: `archiver` v6.0.1, `image-downloader` v4.3.0 - File compression and image downloads

## Utilities
- **HTTP Client**: `axios` v1.7.2, `got` v11.8.6 - API requests and data fetching
- **CLI Styling**: `chalk` v4.1.2, `cfonts` v3.3.0, `figlet` v1.8.0 - Terminal output formatting
- **Time Handling**: `moment-timezone` - Timezone-aware date/time operations
- **Crypto**: `crypto-js`, `aes-js` v3.1.2 - Encryption and security utilities

## Google Services
- **googleapis** v134.0.0 - Integration with Google APIs (likely YouTube, Drive, etc.)

## Data Format
- **json-bigint** v1.0.0 - Handling large integers in JSON (for Facebook IDs)

## Additional Services
- **Fast Speed Test**: `fast-speedtest-api` v0.3.2 - Internet speed testing
- **Imgur**: `imgur` v1.0.2 - Image hosting integration

## Special Features
- **Chess Engine**: `chess.js` v1.0.0-beta.6 - Chess game logic
- **Werewolf Game**: Custom configuration in `werewolfConfig.js` for werewolf party game

## Development Tools
- **dotenv** v16.4.5 - Environment variable management
- **eval** v0.1.8 - Dynamic code evaluation (admin commands)
<img src="docs\logo.svg" style="height:64px;"/>

---

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Go Version](https://img.shields.io/badge/Go-1.19+-blue.svg)](https://golang.org/)
[![Node Version](https://img.shields.io/badge/Node-16+-green.svg)](https://nodejs.org/)
[![Raspberry Pi Compatible](https://img.shields.io/badge/Raspberry%20Pi-Zero%202W-red.svg)](https://www.raspberrypi.org/)

A lightweight, self-hosted digital signage solution optimized for minimal hardware environments like the **Raspberry Pi Zero 2W**. Draper Signage combines ease of use with powerful hardware integration capabilities, perfect for IoT displays, kiosks, and embedded signage systems.

## 🌟 Key Features

- **🌐 Offline-First Architecture** – Full REST API functionality without internet dependency
- **🔧 Hardware Integration** – Direct GPIO pin control and USB device management
- **📝 Custom Scripting** – Extend functionality with Python integration scripts
- **💾 Lightweight Database** – SQLite for reliable, minimal-footprint data storage
- **📱 Cross-Platform Management** – Desktop app built with Tauri for easy content management
- **⚡ Performance Optimized** – Designed specifically for resource-constrained devices

## 🚀 Quick Start

### Prerequisites

- **Hardware**: Raspberry Pi Zero 2W (or any Linux-compatible device)
- **Software**: 
  - Go 1.25+
  - Node.js 19+
  - Rust (for Tauri app)

### Installation Options

#### Option 1: Pre-built Release (Recommended)
```bash
# Download the latest release
wget https://github.com/RugvedPatil/draper-signage/releases/latest/download/draper-signage-linux-arm64.tar.gz
tar -xzf draper-signage-linux-arm64.tar.gz
cd draper-signage
./draper-signage
```

#### Option 2: Development Setup
```bash
# Clone the repository
git clone https://github.com/RugvedPatil/draper-signage.git
cd draper-signage

# Backend (Golang)
cd backend
go mod download
go run main.go

# Frontend (SolidJS) - in a new terminal
cd frontend
npm install
npm run dev

# Desktop App (Tauri) - in a new terminal
cd application
cd src-tauri
cargo install
cd .. 
cargo tauri dev
```

### First Run

1. **Start the backend server**:
   ```bash
   ./draper-signage
   ```
   The API will be available at `http://localhost:9090/api/`

2. **Open the management interface**:
   - Web UI: Navigate to `http://localhost:9090` in your browser
   - Desktop App: Launch the Tauri application

3. **Upload your first content** and start displaying!

## 📖 Usage Examples

### Basic Content Management
```bash
# Upload an image
curl -X POST -F "file=@image.jpg" http://localhost:9090/api/assets/add

# Create a display playlist
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"lobby-display","items":["image.jpg"],"duration":30}' \
  http://localhost:9090/api/playlists
```

### GPIO Control
```python
# Example integration script
import RPi.GPIO as GPIO
import requests

# Control LED based on API status
GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)

response = requests.get("http://localhost:8080/api/status")
if response.status_code == 200:
    GPIO.output(18, GPIO.HIGH)  # Turn on status LED
```

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Desktop App   │    │    Web UI       │    │   REST API      │
│    (Tauri)      │────│   (SolidJS)     │────│   (Golang)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                        │
                       ┌─────────────────┐    ┌─────────────────┐
                       │    SQLite DB    │    │  GPIO/Hardware  │
                       │                 │    │   Integration   │
                       └─────────────────┘    └─────────────────┘
```

## 🔌 API Reference

### Content Management
- `GET /api/assets` - List all content
- `POST /api/assets/add` - Upload new content
- `DELETE /api/assets/:id` - Remove content

### Display Control
- `GET /api/displays` - List connected displays
- `POST /api/displays/:id/playlist` - Set display playlist
- `PUT /api/displays/:id/power` - Control display power

### Hardware Integration
- `GET /api/gpio/pins` - List GPIO pin states
- `PUT /api/gpio/pins/:pin` - Set GPIO pin state
- `GET /api/system/status` - Get system information

📚 **[Complete API Documentation](docs/api.md)** COMMING SOON


## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Running Tests
```bash
# Backend tests
cd backend && go test ./...

# Frontend tests  
cd frontend && npm test

# Integration tests
./scripts/run-integration-tests.sh
```

## 📋 Roadmap

### 🎯 Version 1.0 (Current)
- [x] Core signage functionality
- [x] REST API
- [x] GPIO integration
- [x] SQLite database
- [x] Basic web interface

### 🚀 Upcomming
- [ ] Complete API documentation
- [ ] Enhanced Python SDK
- [ ] Display scheduling system
- [ ] Performance monitoring dashboard
- [ ] Cloud backup & sync (Google Drive/Sheets)
- [ ] Remote device monitoring
- [ ] Multi-device orchestration
- [ ] Advanced hardware control (I2C, SPI)
- [ ] Themeable UI system

## 📊 Performance

| Device | Boot Time | Memory Usage | CPU Usage (Idle) |
|--------|-----------|--------------|------------------|
| Pi Zero 2W | ~15s | 45MB | 2-5% |
| Pi 4 Model B | ~8s | 42MB | 1-3% |
| Generic x86 | ~3s | 38MB | <1% |

## 🐛 Troubleshooting

### Common Issues

**Q: Backend won't start on Raspberry Pi**
```bash
# Check if port is already in use
sudo lsof -i :9090

# Verify Go installation
go version
```

**Q: GPIO permissions denied**
```bash
# Add user to gpio group
sudo usermod -a -G gpio $USER
# Reboot required
sudo reboot
```

**Q: Database locked errors**
```bash
# Check database permissions
ls -la draper.db
# Reset database (WARNING: loses all data)
rm draper.db && ./draper-signage
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [SolidJS](https://www.solidjs.com/) - Reactive frontend framework
- [Tauri](https://tauri.app/) - Cross-platform app framework  
- [Gin](https://gin-gonic.com/) - Go web framework
- [SQLite](https://sqlite.org/) - Embedded database

## 📞 Support

- 📖 [Documentation](https://draper-signage.devRugvedPatil
- 🐛 [Issue Tracker](https://github.com/RugvedPatil/draper-signage/issues)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ for the maker community

</div>
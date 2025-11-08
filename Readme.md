# 🧠 Node.js Basics – Review Branch

This repository is a **review-enhanced fork** of [AlreadyBored/node-nodejs-basics](https://github.com/AlreadyBored/node-nodejs-basics), structured to align with the [RS School Node.js 2025 curriculum](https://github.com/AlreadyBored/nodejs-assignments). It includes modular implementations of core Node.js concepts, with a focus on clarity, testability, and assignment compliance.

> 📌 **Branch:** `review` — 28 commits ahead, 1 behind upstream `main`

---

## 📚 Project Goals

- Build a solid foundation in Node.js core modules and APIs
- Practice asynchronous programming and stream handling
- Implement CLI tools, file operations, and compression
- Explore advanced topics like child processes and worker threads
- Prepare for horizontal scaling with the Cluster API (Section 8)

---

## 📁 Folder Structure

```
src/
├── cli/         # Command-line interface logic and argument parsing
├── cp/          # Child process operations
├── fs/          # File system utilities
├── hash/        # Hashing functionality
├── modules/     # Node.js core modules
├── streams/     # Stream-based operations
├── wt/          # Worker threads
├── zip/         # Compression and decompression logic
```

Each folder corresponds to a specific RS School assignment section. All modules are self-contained and can be executed independently.

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/toby-28/node-nodejs-basics.git
   cd node-nodejs-basics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run a specific module**
   ```bash
   node src/<folder>/<file>.js
   ```

   Replace `<folder>` and `<file>` with the appropriate path. For example:
   ```bash
   node src/fs/files/create.js
   ```

---

## 🧪 Testing

Some modules include test scripts or validation logic. To run tests (if available):

```bash
npm test
```

> ✅ Ensure Node.js v18+ is installed to support modern APIs like `stream/promises` and `worker_threads`.

---

## 🧵 Section 8: Horizontal Scaling (Coming Soon)

The `review` branch is being actively updated to include:
- A custom load balancer using the **Cluster API**
- Round-robin request distribution
- Graceful worker lifecycle management

Once implemented, this logic will live in a dedicated file (e.g., `src/cluster/multi.ts`) and be documented here.

---

## 🧠 Learning Outcomes

By completing this project, you’ll gain hands-on experience with:

- Node.js runtime and architecture
- CLI tool development
- File system and stream manipulation
- Cryptographic hashing
- Child processes and worker threads
- Compression and decompression
- Modular code organization
- Cluster-based horizontal scaling

---

## 🤝 Contributing

This branch is maintained for review and educational purposes. Contributions are welcome via:

- Pull requests
- Issue reports
- Suggestions for clarity or structure

---

## 📄 License

This project inherits the license from the original repository. See [LICENSE](https://github.com/AlreadyBored/node-nodejs-basics/blob/main/LICENSE) for details.

---

Made with 💡 by [@toby-28](https://github.com/toby-28) — based on the work of [@AlreadyBored](https://github.com/AlreadyBored)

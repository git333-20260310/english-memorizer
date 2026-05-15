(() => {
  const NativeDecompressionStream = window.DecompressionStream;
  if (!NativeDecompressionStream) return;

  window.DecompressionStream = function PatchedDecompressionStream(format) {
    if (format !== "gzip") return new NativeDecompressionStream(format);

    const transform = new TransformStream({
      transform(chunk, controller) {
        const bytes = chunk instanceof Uint8Array ? chunk : new Uint8Array(chunk);
        controller.enqueue(stripGzipWrapper(bytes));
      },
    });
    const inflater = new NativeDecompressionStream("deflate-raw");
    return {
      writable: transform.writable,
      readable: transform.readable.pipeThrough(inflater),
    };
  };

  function stripGzipWrapper(bytes) {
    let position = 10;
    const flags = bytes[3];

    if (flags & 4) {
      const length = bytes[position] | (bytes[position + 1] << 8);
      position += 2 + length;
    }
    if (flags & 8) while (bytes[position++] !== 0) {}
    if (flags & 16) while (bytes[position++] !== 0) {}
    if (flags & 2) position += 2;

    return bytes.slice(position, bytes.length - 8);
  }
})();

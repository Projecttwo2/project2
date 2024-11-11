import { describe, it, expect, test } from 'vitest';

test("check if running", async () => {
    const url = await fetch("http://localhost:5173/shop");

    expect(url.status).toBe(200);
});
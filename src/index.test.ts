import { describe, it, expect, test } from 'vitest';

test("check if running", async () => {
    const url = await fetch("http://localhost:5173/contact");

    expect(url.status).toBe(200);
});
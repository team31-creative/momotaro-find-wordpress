/**
 * 指定したクッキーの値を取得
 * @param name クッキー名
 * @returns クッキーの値（存在しない場合は `null`）
 */
export function getCookie(name: string): string | null {
    const match = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${name}=`));

    return match ? decodeURIComponent(match.split("=")[1]) : null;
}

/**
 * クッキーを設定
 * @param name クッキー名
 * @param value クッキーの値
 * @param days 保存する日数（省略時はセッションのみ）
 * @param path クッキーの適用パス（デフォルトは `/`）
 */
export function setCookie(name: string, value: string, days?: number, path: string = "/"): void {
    let expires = "";
    if (days !== undefined) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = `; expires=${date.toUTCString()}`;
    }

    document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=${path}`;
}
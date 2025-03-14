/**
 * Advanced utility functions collection
 */

// 型定義
type ValidationResult<T> = {
  isValid: boolean;
  value: T | null;
  errors: string[];
};

// メインの機能クラス
export class DataProcessor {
  private static readonly EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /**
   * 配列から重複を除去し、ユニークな値のみを返す
   */
  static uniqueValues<T>(array: T[]): T[] {
    return [...new Set(array)];
  }

  /**
   * オブジェクトのディープクローンを作成
   */
  static deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }

  /**
   * メールアドレスのバリデーション
   */
  static validateEmail(email: string): ValidationResult<string> {
    const result: ValidationResult<string> = {
      isValid: false,
      value: null,
      errors: [],
    };

    if (!email) {
      result.errors.push('Email is required');
      return result;
    }

    if (!this.EMAIL_REGEX.test(email)) {
      result.errors.push('Invalid email format');
      return result;
    }

    result.isValid = true;
    result.value = email;
    return result;
  }

  /**
   * 非同期でデータを遅延処理する
   */
  static async delay<T>(data: T, ms: number = 1000): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), ms);
    });
  }

  /**
   * 数値の範囲をチェック
   */
  static isInRange(value: number, min: number, max: number): boolean {
    return value >= min && value <= max;
  }
}
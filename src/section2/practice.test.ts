import { ShoppingList } from "./practice"; // クラスのインポート

describe("ShoppingList クラスのテスト", () => {
  let shoppingList: ShoppingList;

  // 各テストの前に新しいインスタンスを作成
  beforeEach(() => {
    shoppingList = new ShoppingList();
  });

  test("addItem メソッドがアイテムをリストに追加できる", () => {
    shoppingList.addItem("りんご");
    expect(shoppingList.list).toContain("りんご"); // 追加されたことを確認
  });

  test("removeItem メソッドがアイテムをリストから削除できる", () => {
    shoppingList.addItem("バナナ");
    shoppingList.removeItem("バナナ");
    expect(shoppingList.list).not.toContain("バナナ"); // 削除されたことを確認
  });

  test("removeItem メソッドが存在しないアイテムを削除しようとした場合にエラーを投げる", () => {
    expect(() => shoppingList.removeItem("オレンジ")).toThrow("アイテム: オレンジ は存在しません");
  });
});

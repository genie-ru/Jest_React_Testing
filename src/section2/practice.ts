export class ShoppingList {
  public list: string[] = [];

  constructor() {
    this.list = [];
  }

  addItem(item: string): void{
    this.list.push(item);
  }

  removeItem(item: string): void{
    const index = this.list.indexOf(item);
    if (index === -1) {
      throw new Error(`アイテム: ${item} は存在しません`);
    }
    this.list.splice(index, 1);
  }
}

// 以下のテストケースを満たすように ShoppingList クラスを実装してください

// 1. addItemメソッドがアイテムをリストに追加できることを確認するテストケース
// 2. removeItemメソッドがアイテムをリストから削除できることを確認するテストケース
// 3. removeItemメソッドが存在しないアイテムを削除しようとした場合にエラーが発生することを確認するテストケース
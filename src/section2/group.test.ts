const group = ["apple", "banana", "cherry"];

describe("配列に関するテスト", () => {
  it("配列の要素数が3であること", () => {
    expect(group.length).toBe(3);
  }
  );
  it("配列には'apple', 'banana', 'cherry'が含まれていること", () => {
    expect(group).toContain("apple");
    expect(group).toContain("banana");
    expect(group).toContain("cherry");
  }
  );
  it("配列には'apple', 'banana', 'cherry'以外の要素が含まれていないこと", () => {
    expect(group).not.toContain("orange");
    expect(group).not.toContain("grape");
    expect(group).not.toContain("melon");
  }
  );
}
);
// Compare this snippet from src/section2/sum.ts:
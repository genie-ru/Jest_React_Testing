import { render, screen, fireEvent } from "@testing-library/react"
import AsyncComponent from "./AsyncComponent"

describe("AsyncComponent", () => {
  it("ボタンをクリックすると非同期処理が実行される", async () => {
    render(<AsyncComponent />)
    const button = screen.getByRole("button");
    fireEvent.click(button);
  });
});
import { render } from "@testing-library/react";
import SnapshotComponent from "./SnapshotComponent";

it("Snapshotテスト", () => {
  const { container } = render(<SnapshotComponent text="react" />);
  expect(container).toMatchSnapshot();
});
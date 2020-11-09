import React from "react";

describe("ArticleListItem tests", () => {
it("renders correctly", () => {
    const { container } = render(<li/>);
    expect(container).toMatchSnapshot();
  });
});
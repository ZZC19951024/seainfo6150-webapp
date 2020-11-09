import React from "react";

describe("ArticleList tests", () => {
	it("renders correctly", () => {
		const { container } = render(<div/>);
		expect(container).toMatchSnapshot();
	});
})


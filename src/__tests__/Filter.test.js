import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";
import ShoppingList from "../components/ShoppingList";

const testData = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Pomegranate", category: "Produce" },
  { id: 3, name: "Lettuce", category: "Produce" },
  { id: 4, name: "String Cheese", category: "Dairy" },
  { id: 5, name: "Swiss Cheese", category: "Dairy" },
  { id: 6, name: "Cookies", category: "Dessert" },
];

const noop = () => {};

test("uses a prop of 'search' to display the search term in the input field", () => {
  render(<Filter search="testing" onSearchChange={noop} />);
  expect(screen.queryByPlaceholderText(/Search/).value).toBe("testing");
});

// ... Other tests ...

test("the shopping filters based on the search term to include full matches", () => {
  const { container } = render(<ShoppingList items={testData} />);
  fireEvent.change(screen.queryByPlaceholderText(/Search items.../), {
    target: { value: "Yogurt" },
  });

  // Query the container to check the items
  const itemsContainer = container.querySelector(".Items");
  expect(itemsContainer.children.length).toBe(1);
  expect(screen.queryByText("Yogurt - Dairy")).toBeInTheDocument();
});

test("the shopping filters based on the search term to include partial matches", () => {
  const { container } = render(<ShoppingList items={testData} />);
  fireEvent.change(screen.queryByPlaceholderText(/Search items.../), {
    target: { value: "Cheese" },
  });

  const itemsContainer = container.querySelector(".Items");
  expect(itemsContainer.children.length).toBe(2);
  expect(screen.queryByText("Swiss Cheese - Dairy")).toBeInTheDocument();
  expect(screen.queryByText("String Cheese - Dairy")).toBeInTheDocument();
});

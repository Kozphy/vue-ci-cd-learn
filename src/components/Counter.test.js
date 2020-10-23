import { fireEvent, render } from "@testing-library/vue";
import Counter from "./Counter.vue";

test('Original title is 「當前點擊次數0」', async () => {
  const { getByTestId, getByText } = render(Counter);

  const incrementButton = getByText('點我 + 1');
  await fireEvent.click(incrementButton);

  const title = getByTestId('currentCounter');

  expect(title.innerHTML).toBe('當前點擊次數1');
})
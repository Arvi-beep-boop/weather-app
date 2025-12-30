import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { getAggregatedForecast } from "./getAggregatedForecast";
import forecast3h from "../mocks/forecast3h.json";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

test("get aggregated forecast", () => {
  vi.setSystemTime(new Date(1765054800000));
  expect(getAggregatedForecast(forecast3h)).toMatchFileSnapshot(
    "./getAggregatedForecastResult"
  );
});

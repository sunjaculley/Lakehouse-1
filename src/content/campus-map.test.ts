import { test } from "node:test";
import assert from "node:assert/strict";
import { campusPins, campusMatchesLevel, campusFocusView, campusFullView } from "./campus-map";
import { clientContent } from "./client";

test("map pins preserve the supplied destination coordinates and levels", () => {
  assert.deepEqual(campusPins.map(p => [p.id, p.level, p.x, p.y]), [
    ["the-exchange", 1, 331, 343], ["stretch", 1, 455, 390], ["lakeside-park", 1, 470, 327],
    ["the-landing", 1, 588, 279], ["common-ground", 2, 541, 153], ["blend", 2, 628, 199],
  ]);
});
test("level filters retain four ground destinations and two upper-level destinations", () => {
  assert.deepEqual(campusPins.filter(p => campusMatchesLevel(p, "2")).map(p => p.id), ["common-ground", "blend"]);
  assert.equal(campusPins.filter(p => campusMatchesLevel(p, "1")).length, 4);
  assert.equal(campusPins.filter(p => campusMatchesLevel(p, "all")).length, 6);
});
test("map pins use only existing visitor destinations", () => {
  assert.deepEqual(campusPins.map(p => p.id).sort(), clientContent.destinations.map(d => d.id).sort());
});
test("destination zoom stays within the campus artwork", () => {
  for (const pin of campusPins) {
    const view = campusFocusView(pin);
    assert.equal(view.w, 250);
    assert.ok(view.x >= 0 && view.y >= 0);
    assert.ok(view.x + view.w <= campusFullView.w && view.y + view.h <= campusFullView.h);
  }
});
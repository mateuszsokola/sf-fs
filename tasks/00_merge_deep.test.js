const merge_deep = require("./00_merge_deep");

describe("merge_deep", () => {
  it("shallow merge", () => {
    const a = {
      first_name: "John",
      last_name: "Doe",
    };
    const b = {
      last_name: "Smith",
    };
    const output = merge_deep({}, a, b);

    expect(output).toEqual({
      first_name: "John",
      last_name: "Smith",
    });
  });

  it("deep merge", () => {
    const defaults = {
      first_name: "",
      last_name: "",
      address: {
        street: "",
        zip: "",
        city: "",
        state: "",
        country: "US",
      },
    };

    const input = {
      first_name: "John",
      last_name: "Doe",
      address: {
        street: "8433 Sunset Blvd",
        zip: "90210",
        city: "Beverly Hills",
        state: "CA",
      },
    };
    const output = merge_deep({}, defaults, input);

    expect(output).toEqual({
      first_name: "John",
      last_name: "Doe",
      address: {
        street: "8433 Sunset Blvd",
        zip: "90210",
        city: "Beverly Hills",
        state: "CA",
        country: "US",
      },
    });
  });
});

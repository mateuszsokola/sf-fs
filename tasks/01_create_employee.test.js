const create_employee = require("./01_create_employee");

describe("create_employee", () => {
  it("creates an employee", () => {
    // Do not change the input
    const john_doe = {
      first_name: "John",
      last_name: "Doe",
      history: [
        {
          position: "Cashier",
          salary: 4000,
        },
      ],
    };
    const employee = create_employee(john_doe);

    expect(employee.created_at).not.toBe(null);
    expect(employee.last_modified).toBe(null);
    expect(employee.first_name).toEqual("John");
    expect(employee.last_name).toEqual("Doe");
    expect(employee.history[0]).toEqual({
      position: "Cashier",
      salary: 4000,
      current: true,
    });
  });

  describe("data validation", () => {
    it("requires first name", () => {
      const john_doe = {
        last_name: "Doe",
        history: [
          {
            position: "Cashier",
            salary: 4000,
          },
        ],
      };

      expect(() => create_employee(john_doe)).toThrow(
        "You must provide first name to create a new employee"
      );
    });

    it("requires last name", () => {
      const john_doe = {
        first_name: "John",
        history: [
          {
            position: "Cashier",
            salary: 4000,
          },
        ],
      };

      expect(() => create_employee(john_doe)).toThrow(
        "You must provide last name to create a new employee"
      );
    });

    it("requires a position", () => {
      const john_doe = {
        first_name: "John",
        last_name: "Doe",
        history: [
          {
            salary: 4000,
          },
        ],
      };

      expect(() => create_employee(john_doe)).toThrow(
        "You must assign position to create a new employee"
      );
    });

    it("requires salary", () => {
      const john_doe = {
        first_name: "John",
        last_name: "Doe",
        history: [
          {
            position: "Cashier",
          },
        ],
      };

      expect(() => create_employee(john_doe)).toThrow(
        "You must assign salary to create a new employee"
      );
    });
  });
});

# Entry_Control_Board

### What this Is
We are making a digitized version of the entry control board (ECB) used by firefighters in the GTA. The board keeps track of where each firefighting team is within a building and what their current task is.

Available for testing here (v3.4): https://amanb2000.github.io/yaah/Prototype_04/#!/

###`Angular`
I learned Angular for this project, so the `Angular` folder has my preliminary angular demos.

###`Prototype_01`: YAAH ECB Version 3.1
This is a bare-bones version of our product. The only function is for it to be testable in the simplest sense. Its functionality includes:
1. Table-based representation for the firefighting teams (hard-coded teams)
2. Dropdown for each team for where they are, what their assignment is (hard-coded assignments)
3. Dropdown for location (hard-coded locations)

Notable things not included:
* Timing functionality
* Adding/subtracting firefighter teams
* Adding/subtracting assignments
* Adding/subtracting locations

###`Prototype_02`: YAAH ECB Version 3.2
Build up version of v3.1. Implements timing functionality, displaying the time since you pressed the "check in" button next to each firefighter team row.

### `Prototype_03`: YAAH ECB Version 3.3
Implemented a bunch more features including:
* Timing for how long firefighting teams have been in the fire.
* Whiting out for firefighting teams who are not currently engaged in the fire.
* Functionality for adding and subtracting firefighting teams.
* Functionality for changing order of firefighting teams in table.
* Contrast ratio testing.
* 16px+ fonts

### `Prototype_04`: YAAH ECB Version 3.4
Implemented final changes and (most significantly) made it a multi-page application to reduce cognitive load.

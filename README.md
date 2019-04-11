# Entry_Control_Board

### What this Is
Team YAAH (Yannis, Amy, Aman, and Haochen) is making a digitized version of the entry control board (ECB) used by firefighters in the GTA. The board keeps track of where each firefighting team is within a building and what their current task is. Our goal is to reduce human error and increase input/output efficiency.

![YAAH Entry Control Board Screenshot](https://imgur.com/a/CPOCly1)

Available for testing here (v3.5): https://amanb2000.github.io/yaah/Prototype_05/#!/

High Rise Prototype v3.5: https://amanb2000.github.io/yaah/Prototype_05/High_Rise_05/#!/

### What We Have Learned

## About the Prototypes

### `Angular`
I learned Angular for this project, so the `Angular` folder has my preliminary angular demos.

### `Prototype_01`: YAAH ECB Version 3.1 - Testable Prototype
This is a bare-bones version of our product. The only function is for it to be testable in the simplest sense. Its functionality includes:
1. Table-based representation for the firefighting teams (hard-coded teams)
2. Dropdown for each team for where they are, what their assignment is (hard-coded assignments)
3. Dropdown for location (hard-coded locations)

Notable things not included:
* Timing functionality
* Adding/subtracting firefighter teams
* Adding/subtracting assignments
* Adding/subtracting locations

### `Prototype_02`: YAAH ECB Version 3.2 - Implementing more Functional Features
Build up version of v3.1. Implements timing functionality, displaying the time since you pressed the "check in" button next to each firefighter team row.

### `Prototype_03`: YAAH ECB Version 3.3 - Implementing even more Functional Features, Augmenting Original Features
Implemented a bunch more features including:
* Timing for how long firefighting teams have been in the fire.
* Whiting out for firefighting teams who are not currently engaged in the fire.
* Functionality for adding and subtracting firefighting teams.
* Functionality for changing order of firefighting teams in table.
* Contrast ratio testing.
* 16px+ fonts

### `Prototype_04`: YAAH ECB Version 3.4 - Expanding from set of Original Features
Implemented final changes and (most significantly) made it a multi-page application to reduce cognitive load.

### `Prototype_05`: YAAH ECB Version 3.5 - Incorporating user feedback
Fixed some UI tweaks including:
* Better iPad scalability (still working to optimize)
* Emptying drop downs when teams sign out
* Alphabetical ordering for pre-existing/defined locations and assignments.
* Created high-rise specific version
* Consistency of styling

### `High_Rise_05`: YAAH ECB Version 3.5-H - Adding High Rise Functionality
According to the firefighters in Toronto fire station No. 315, it is useful to have a numerical input for the location as it would be inconvenient to use a drop-down menu for large numbers of floors when tracking location.

This version primarily implemented the numerical input along with cardinal directions as the default settings for sub-location. This was well-received by the firefighters in station No. 315.

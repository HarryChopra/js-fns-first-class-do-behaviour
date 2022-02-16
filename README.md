# JavaScript Functions as First Class Data: Do behavior

## Create a "First-Class" Function

When you click the `Submit`
button, the event handler is going to make calls to **two** functions.

## The `greet()` function

The `greet` function should take one argument, a `String` which specifies the
24-hour time in the format `HH:MM`.

-   If the time is earlier than 12pm, return "Good Morning".
-   If the time is between 12pm and 5pm, return "Good Afternoon".
-   If the time is later than 5pm, return "Good Evening".

## The `displayMessage()` function

The `displayMessage` function should take one argument, a `String`.

When the function runs it should update the text inside the `#greeting` node
with the content of the argument.

It does not return anything.

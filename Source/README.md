
## devRant API

*A wrapper for the **[devRant]** API.*

<br>

```JavaScript
import { User } from "https://deno.land/x/devrant@0.1.0/mod.ts";
```

<br>
<br>

## User Id

*Query for a users Id with their username.*

```JavaScript
const userId = await User.id('ElectroArchiver'); // 5703431
```

<br>
<br>

## User Content

*Query for a users profile content with a users Id.*

```JavaScript
const content = await DevRant.User.content({

    //  all , rants , upvoted , comments , favorites , collabs

    content : 'all' ,

    userId : 5703431
});
```

<br>


<!----------------------------------------------------------------------------->

[devRant]: https://devrant.com/

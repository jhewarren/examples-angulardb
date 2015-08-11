# examples-angulardb
examples referenced when developing an MVC angularjs app
initially used to find out how to dereference angular variables (this.)
would eventually like to more rigorously incorporate functions with objects
i.e. customer has form and function (aka F&f), 
  including (1-m) payment forms w/ F&f
  including (1-m) addresses - w/ F&f
    including services (w F&f)
...

call customer.name or customer.add()
or customer.address.add()
or ...

Would also like to cache, save locally and sync remotely (specifically in a mobile context)
and local/remote services should be independant and extensive
It should not matter whether I use JSON or SQLite locally - or MongoDB or MySQL remotely

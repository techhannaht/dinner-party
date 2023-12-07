using System;

namespace WishList
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Wish> myWishes = new List<Wish>
              {
                new Wish {Name = "An original eight track of William Shatner's 'Lucy in the Sky with Diamonds"},
                new Wish {Name  = "The ability to think of interesting wishes on short notice"},
                new Wish {Name = "A washtub of Skittles" },
                new Wish {Name = "World peace, but not the kind of world peace where all the humans are removed from existence"},
                new Wish {Name = "A TV that is NOT internet-capable" },
                new Wish {Name = "The ability to fly, but, like, really fast...not just, like, how fast I can walk, but, like, fast, you know?"},
              };

            // Display to terminal
            Console.WriteLine("My Wishes...");

            // Iterate through each wish and log it to the console
            foreach (var wish in myWishes)
            {
                Console.WriteLine(wish.Name);
            }

        }
    }

    class Wish
    {
        public String Name { get; set; } = string.Empty;

    }

}

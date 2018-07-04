using System;
using System.Collections.Generic;
using System.IO;

namespace PhoneDict
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Number of entries: ");
            int numEntries = Convert.ToInt32(Console.ReadLine());
            IDictionary<string, int> phoneBook = new Dictionary<string, int>();
            

            for (int i = 0; i < numEntries; i++)
            {
                //Console.WriteLine("Entries: ");
                var entry = Console.ReadLine();
                string[] tempArray = entry.Split((char[]) null, StringSplitOptions.RemoveEmptyEntries);
                phoneBook.Add(new KeyValuePair<string, int>(tempArray[0], Convert.ToInt32(tempArray[1])));
            }
            
            /* phoneBook.Add(new KeyValuePair<string, int>("sam", 8675309));
            phoneBook.Add(new KeyValuePair<string, int>("sue", 1111111));*/

            /* foreach (var entry in phoneBook)
            {
                Console.WriteLine(entry);
            } */

            string search = "";
            List<string> searchNames = new List<string>();
            while(!string.IsNullOrEmpty(search = Console.ReadLine()))
            {
                searchNames.Add(search);   
            }
            int numValue;
            for (int j = 0; j < searchNames.Count; j++)
            {
                if (phoneBook.TryGetValue(searchNames[j], out numValue))
                {
                    Console.WriteLine("{0}={1}", searchNames[j], numValue);
                }
                else
                {
                    Console.WriteLine("Not found");
                }    
            } 
        }  
    }
}

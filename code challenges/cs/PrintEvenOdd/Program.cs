//Accepts n and n number of strings, prints even and odd characters
using System;
using System.Collections.Generic;
using System.IO;

namespace PrintEvenOdd
{
    class Program
    { 
        static void Main(String[] args) 
        {
            
            //Console.WriteLine("Begin input:");
            int indexNum = Convert.ToInt32(Console.ReadLine());
            string[] input = new string[indexNum];
            //Console.WriteLine("IndexNum:" + indexNum);
            for (int i = 0; i < indexNum; i++)
            {
                input[i] = Console.ReadLine(); //each i is an entire input line
                //Console.WriteLine("Input accepted.");
            }

            foreach (string phrase in input)
            {
                string even_output = "";
                string odd_output = "";

                for (int j = 0; j < phrase.Length; j++)
                {
                    if (j == 0 || j % 2 == 0)
                    {
                        even_output += phrase[j];
                    } else
                    {
                        odd_output += phrase[j];
                    }
                }
                Console.WriteLine($"{even_output} {odd_output}");
            }


        }

    }
}

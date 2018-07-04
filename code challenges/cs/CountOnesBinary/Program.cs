using System;
using System.Collections.Generic;

namespace CountOnesBinary
{
    class Program
    {
        public static List<int> remainderList = new List<int>();

        static void Main(string[] args)
        {
            int n = Convert.ToInt32(Console.ReadLine());
            
            
            while (divideNum(n) > 0)
            {
                divideNum(n);
            }

            Console.WriteLine(getOnesCount());
            
        }

        static int divideNum (int num)
        {
            //Console.WriteLine("Num: " + num);
            if (num == 0)
            {
                return 0;
            }
            else
            {
                setRemainderList(num % 2);
                return num = divideNum(num / 2);
            }
        
        }

        static void setRemainderList (int num2)
        {
            remainderList.Insert(0, num2);
        }

        static int getOnesCount ()
        {
            int countOnes = 0;

            foreach (var digit in remainderList)
            {
                
                if (digit == 1)
                {
                    countOnes++;
                }
                else 
                {
                    countOnes = countOnes + 0;
                }
                
            }

            return countOnes;
            
        }
    }
}

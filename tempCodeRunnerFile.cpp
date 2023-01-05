#include <iostream>
using namespace std;

int main() 
{
    int i,j,k,n;
    cin>>n;
    for(i=1;i<=n;i++)
    {
        if(i<=n/2+1){
        k=1;
        while(k<=n/2+1-i)
        {
            cout<<" ";
            k++;
        }
        j=1;
        while (j <= 2 * i - 1) {
          cout << "*";
          j++;
        }
        cout<<endl;
        }
        else{
            k=1;
            while(k<=n-i)
            {
                cout<<" ";
                k++;
            }
            j=n-1+1;
            while (j >= 0) {
              cout << "*";
              j--;
            }
            cout<<endl;
        }
    }
}


#include<cstdio>
#include<iostream>
using namespace std;
int n, m, a[1000001], t[1000001], l, r;
int main() {
    cin>>n;
    for (int i = 1; i <= n; i++) {
        cin>>a[i];
    }
    for (int i = 1; i <= n; i++) {
        t[i] = a[i] + t[i - 1];
    }
   cin>>m;
    for (int i = 1; i <= m; i++) {
        cin>>l;
        cin >> r;
        printf("%d\n", t[r] - t[l - 1]);
    }
}
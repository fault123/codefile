#include<cstdio>
#include<iostream>
#include<algorithm>
using namespace std;
int n, k;
double a[1001];
int check(int j) {
	int count = 0;
	for (int i = 0; i < n; i++) {
		count += a[i] / j;
	}
	if (count >= k)
		return 1;
	else
		return 0;
}

int main() {
	double mid;
	cin >> n >> k;
	for (int i = 0; i < n; i++) {
		double t;
		cin >> t;
		a[i] = t*100;
	}
	sort(a, a + n);
	int l = 0, r = a[n - 1];
	while (l <= r) {
		int mid = (l + r) / 2;
		if (check(mid)) {
			l = mid + 1;
		}
		else
			r = mid - 1;
	}
	printf("%.2lf", r / 100.0);
	return 0;
}
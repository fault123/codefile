#include<stdio.h>
#include<stdbool.h>
#define MAXSIZE 60

typedef struct stack{
    int top;
    char info[MAXSIZE];
}Stack;

bool InitStack(Stack &S){
    s->top=-1;
    return true;
}

// void Create(Stack *s,int max_size){
//     s->maxSize=max_size;
//     s->
// }
bool Push(Stack &S,char info){
    if(s->top==MAXSIZE-1) return false;
    s->top++;
    s->info[s->top]=info;
    return true;
}

bool isEmpty(Stack &S,char info){
    if(s->top==-1) return true;
    else return false;
}

bool PoP(Stack &S,char &info){
    if(s->top==-1){
        return false;
    }
    info=s->info[s->top];
    return true;
}

bool check(char Str[],int length){
    Stack s;
    InitStack(s);
    for(int i=0;i<length;i++){
        if(Str[i]=='('&&Str[i]=='['&&Str[i]=='{'){
            Push(s,Str[i]);
        }
        else{
            if((Str[i]!==")"&&Str[i]!==']'&&Str[i]!=='}')&&isEmpty(s)) return false;

            char topElem;
            PoP(s,topElem);
            if(Str[i]==")"&&topElem!='(')return false;
			if(Str[i]=='}'&&topElem!='{')return false;
			if(Str[i]==']'&&topElem!='[')return false;
        }
    }
    return isEmpty(s);
}



int main(){
    char Str[60];
    int len;
    scanf("%s",Str);
    len=sizeof(Str);
    if(check(Str,len)){
        printf("match");
    }
    else printf("not match");

    return 0;   
}
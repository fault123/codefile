#include<stdio.h>
typedef struct student{
    int score;
    struct  student *next;
    
}LinkList;

LinkList *creat(int n){
    LinkList *head , *node , *end;
    head = (LinkList*)malloc(sizeof(LinkList));
    end = head;
    for( int i = 0; i < n ; i++){
        node = (LinkList*)malloc(sizeof(LinkList));
        scanf("%d", &node->score);
        end->next = node;
        end = node;
    }
    end->next = NULL;
    return head;
}
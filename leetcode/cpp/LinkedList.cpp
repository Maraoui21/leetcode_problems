#include<iostream>
using namespace std;
class Node{
public:
    int value;
    Node *next;
    Node(int val){
        this->value = val;
        this->next = nullptr;
    }
};

class LinkedList{
public:
    Node *head;
    Node *tail;
    LinkedList(){
        this->head = nullptr;
        this->tail = nullptr;
    }
    void push(int value){
        Node *N = new Node(value);
        if(this->head == nullptr){
            this->head = N;
            this->tail = N;
            return;
        }
        this->tail->next = N;
        this->tail = N;
    }
    void show(){
        Node *L = this->head;
        while (L!=nullptr)
        {
            cout << L->value << "\n";
            L = L->next;
        }
        
    }
    void RemoveDuplicate(){
        Node* L = this->head;
        Node* toSave;
        while (L!=nullptr)
        {
            if(L->next != nullptr){
                if(L->value == L->next->value){
                    toSave = L->next;
                    L->next = L->next->next;
                    delete toSave;
                }
            }
            L = L->next;
        }
        
    }
};

int main(){

    LinkedList *L = new LinkedList();

    L->push(1);
    L->push(1);
    L->push(2);
    L->push(3);
    L->push(3);
    
    cout << "before clean"<<"\n";
    L->show();
    cout << "AFTER "<<"\n";
    L->RemoveDuplicate();
    L->show();
}
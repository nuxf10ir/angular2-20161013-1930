#Nothing is here


        let myObserverNext: any;
        let o = Rx.Observable.create((observer) => {
            myObserverNext = observer.next;
        });

        
        let s = new Subject();
        
        s.subscribe(() => {
            
        });
        
        s.next('Hi!');

        myObserverNext('Hi!');
        
        
        
- HOT  -> TV  (.subcribe())      =>   .fromEvent
- COLD -> YOUTUBE (.subcribe())  =>   .from([1,2,3])


Subject  HOT!!!


- AsyncSubject
- BehaviorSubject
- ReplaySubject


        
        
        
        
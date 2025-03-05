;; Define tasks
(: Task1 (task 
    (name "Write Proposal") 
    (duration 2) 
    (priority 5) 
    (deadline 10) 
    (dependencies [])))

(: Task2 (task 
    (name "Review Proposal") 
    (duration 1) 
    (priority 4) 
    (deadline 12) 
    (dependencies [Task1])))

(: Task3 (task 
    (name "Submit Proposal") 
    (duration 1) 
    (priority 3) 
    (deadline 15) 
    (dependencies [Task2])))

;; Build dependency graph
(define (build-dependency-graph tasks)
  (map (lambda (task)
         (cons (get task 'name) (get task 'dependencies)))
       tasks))

;; Topological sort
(define (topological-sort graph)
  (let ((visited [])
        (sorted []))
    (define (visit node)
      (unless (member node visited)
        (set! visited (cons node visited))
        (for-each visit (cdr (assoc node graph)))
        (set! sorted (cons node sorted))))
    (for-each visit (map car graph))
    sorted))

;; Priority-based sorting
(define (sort-by-priority-and-deadline tasks)
  (sort tasks
        (lambda (task1 task2)
          (if (> (get task1 'priority) (get task2 'priority))
              #t
              (if (= (get task1 'priority) (get task2 'priority))
                  (< (get task1 'deadline) (get task2 'deadline))
                  #f)))))

;; Scheduling algorithm
(define (schedule-tasks tasks)
  (let* ((graph (build-dependency-graph tasks))
         (sorted-tasks (topological-sort graph))
         (final-tasks (sort-by-priority-and-deadline sorted-tasks)))
    final-tasks))

;; Rule for dynamic updates
(rule (when (task-completed ?task)
        (update-schedule)))

(define (update-schedule)
  (let ((tasks (get-all-tasks))) ;; Fetch all tasks from the database
    (schedule-tasks tasks)))
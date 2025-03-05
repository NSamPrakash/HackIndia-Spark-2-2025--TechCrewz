# Placeholder for MeTTa interpreter logic
class MeTTa:
    def __init__(self):
        self.tasks = [
            {"name": "Write Proposal", "duration": 2, "priority": 5, "deadline": 10, "dependencies": []},
            {"name": "Review Proposal", "duration": 1, "priority": 4, "deadline": 12, "dependencies": ["Write Proposal"]},
            {"name": "Submit Proposal", "duration": 1, "priority": 3, "deadline": 15, "dependencies": ["Review Proposal"]}
        ]

    def run(self, code):
        # Simulate task scheduling logic
        if "schedule-tasks" in code:
            return self.tasks
        elif "task-completed" in code:
            task_name = code.split(" ")[1]
            self.tasks = [t for t in self.tasks if t['name'] != task_name]
        return self.tasks

# Initialize MeTTa interpreter
metta = MeTTa()

# Function to get scheduled tasks
def get_scheduled_tasks():
    result = metta.run("(schedule-tasks [Task1 Task2 Task3])")
    return result

# Function to mark a task as completed
def mark_task_completed(task_name):from metta import MeTTa

# Initialize MeTTa interpreter
metta = MeTTa()

# Load the tasks.metta file
with open("tasks.metta", "r") as f:
    metta_code = f.read()
metta.run(metta_code)

# Function to get scheduled tasks
def get_scheduled_tasks():
    result = metta.run("(schedule-tasks)")
    return result

# Function to mark a task as completed
def mark_task_completed(task_name):
    metta.run(f"(task-completed {task_name})")
    result = metta.run("(update-schedule)")
    return result

    metta.run(f"(task-completed {task_name})")
    result = metta.run("(update-schedule)")
    return result
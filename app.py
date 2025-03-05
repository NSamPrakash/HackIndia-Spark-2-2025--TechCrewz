from flask import Flask, jsonify, request
from flask_cors import CORS
from scheduler import get_scheduled_tasks, mark_task_completed

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = get_scheduled_tasks()
    return jsonify({"tasks": tasks})

@app.route('/tasks/<task_name>/complete', methods=['POST'])
def complete_task(task_name):
    updated_schedule = mark_task_completed(task_name)
    return jsonify({"updated_schedule": updated_schedule})

if __name__ == "__main__":
    app.run(debug=True)

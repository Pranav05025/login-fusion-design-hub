
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Task } from './TaskCard';

interface TaskFormProps {
  task?: Task | null;
  onSubmit: (task: Omit<Task, 'id'>) => void;
  onCancel: () => void;
}

const TaskForm = ({ task, onSubmit, onCancel }: TaskFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.dueDate);
      setPriority(task.priority);
    }
  }, [task]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      dueDate,
      status: task?.status || 'open',
      priority,
    });
    
    // Reset form
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('medium');
  };

  return (
    <Card className="shadow-lg border-0 bg-white">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl text-gray-800">
          {task ? 'Edit Task' : 'Create New Task'}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-12"
              required
            />
          </div>
          
          <div>
            <Textarea
              placeholder="Task description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px] resize-none"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="h-12"
                required
              />
            </div>
            
            <div>
              <Select value={priority} onValueChange={(value: 'low' | 'medium' | 'high') => setPriority(value)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low Priority</SelectItem>
                  <SelectItem value="medium">Medium Priority</SelectItem>
                  <SelectItem value="high">High Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {task ? 'Update Task' : 'Create Task'}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="px-8 h-12"
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default TaskForm;

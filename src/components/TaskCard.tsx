
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckSquare, Circle, Clock, X } from 'lucide-react';

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'open' | 'completed';
  priority: 'low' | 'medium' | 'high';
}

interface TaskCardProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

const TaskCard = ({ task, onToggleComplete, onDelete, onEdit }: TaskCardProps) => {
  const priorityColors = {
    low: 'bg-green-100 text-green-800 border-green-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    high: 'bg-red-100 text-red-800 border-red-200',
  };

  const isOverdue = new Date(task.dueDate) < new Date() && task.status === 'open';

  return (
    <Card className={`group hover:shadow-md transition-all duration-200 border-l-4 ${
      task.status === 'completed' 
        ? 'border-l-green-500 bg-gray-50' 
        : isOverdue 
        ? 'border-l-red-500' 
        : 'border-l-blue-500'
    }`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3 flex-1">
            <Checkbox
              checked={task.status === 'completed'}
              onCheckedChange={() => onToggleComplete(task.id)}
              className="mt-1"
            />
            
            <div className="flex-1 min-w-0">
              <h3 className={`font-semibold text-gray-900 ${
                task.status === 'completed' ? 'line-through text-gray-500' : ''
              }`}>
                {task.title}
              </h3>
              
              {task.description && (
                <p className={`text-sm mt-1 ${
                  task.status === 'completed' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {task.description}
                </p>
              )}
              
              <div className="flex items-center gap-2 mt-3">
                <Badge variant="outline" className={priorityColors[task.priority]}>
                  {task.priority}
                </Badge>
                
                <div className={`flex items-center text-xs ${
                  isOverdue ? 'text-red-600' : 'text-gray-500'
                }`}>
                  <Clock className="w-3 h-3 mr-1" />
                  {new Date(task.dueDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(task)}
              className="h-8 w-8 p-0 hover:bg-blue-100"
            >
              <Circle className="w-4 h-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(task.id)}
              className="h-8 w-8 p-0 hover:bg-red-100 text-red-600"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Logo from './Logo';
import { toast } from '@/hooks/use-toast';

const LoginPage = ({ onLogin }: { onLogin: () => void }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleEmailAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be connected to Supabase authentication
    toast({
      title: "Authentication Ready",
      description: "Connect Supabase to enable email authentication",
    });
    onLogin(); // For demo purposes
  };

  const handleSocialLogin = (provider: string) => {
    // This will be connected to Supabase social authentication
    toast({
      title: `${provider} Login Ready`,
      description: "Connect Supabase to enable social authentication",
    });
    onLogin(); // For demo purposes
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <Card className="w-full max-w-md shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <Logo className="h-12 w-12" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </CardTitle>
          <CardDescription className="text-gray-600">
            {isLogin ? 'Sign in to manage your tasks' : 'Start organizing your life today'}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Social Login Buttons */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full h-12 text-sm font-medium border-gray-200 hover:bg-gray-50 transition-all duration-200"
              onClick={() => handleSocialLogin('Google')}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </Button>

            <Button
              variant="outline"
              className="w-full h-12 text-sm font-medium border-gray-200 hover:bg-gray-50 transition-all duration-200"
              onClick={() => handleSocialLogin('Facebook')}
            >
              <svg className="w-5 h-5 mr-3" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Continue with Facebook
            </Button>

            <Button
              variant="outline"
              className="w-full h-12 text-sm font-medium border-gray-200 hover:bg-gray-50 transition-all duration-200"
              onClick={() => handleSocialLogin('Apple')}
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C8.396 0 8.025.044 8.025.044c0 0-.396.044-.792.088C6.84.176 6.444.22 6.048.264c-.792.088-1.584.22-2.288.396C2.376.88 1.584 1.188.924 1.628c-.66.44-1.188.968-1.628 1.628C-.264 3.916-.132 4.708.044 5.5c.132.792.308 1.584.572 2.288.264.704.616 1.364 1.056 1.936.44.572.968 1.056 1.54 1.364.572.308 1.188.484 1.848.616.66.132 1.364.176 2.068.176h8.784c.704 0 1.408-.044 2.068-.176.66-.132 1.276-.308 1.848-.616.572-.308 1.1-.792 1.54-1.364.44-.572.792-1.232 1.056-1.936.264-.704.44-1.496.572-2.288.176-.792.308-1.584.044-2.376-.44-.66-.968-1.188-1.628-1.628-.66-.44-1.452-.748-2.244-.968-.704-.176-1.496-.308-2.288-.396-.396-.044-.792-.088-.792-.088S15.638 0 12.017 0z"/>
              </svg>
              Continue with Apple
            </Button>
          </div>

          <div className="relative">
            <Separator className="my-6" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-gray-500">
              or continue with email
            </span>
          </div>

          {/* Email Form */}
          <form onSubmit={handleEmailAuth} className="space-y-4">
            {!isLogin && (
              <div>
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12"
                  required
                />
              </div>
            )}
            
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
                required
              />
            </div>
            
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12"
                required
              />
            </div>

            <Button type="submit" className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium">
              {isLogin ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;

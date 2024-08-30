import numpy as np

exercise = np.array([[1,1,1,1,1],
                    [1, 0 ,0 ,0,1],
                    [1, 0, 9, 0 ,1],
                    [1, 0 ,0 ,0,1],
                    [1,1,1,1,1]])
print(exercise)
Matrix = np.ones((5,5))
Matrix[1, 1:-1] = 0
Matrix[2, 1:-1:2] = 0
Matrix[3, 1:-1] = 0
Matrix[2,2] = 9
print(Matrix)

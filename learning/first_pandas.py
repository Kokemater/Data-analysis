import pandas as pd

# Sample DataFrame
data = {'Method': ['A', 'B', 'C'], 'Accuracy': [0.92, 0.85, 0.88]}
df = pd.DataFrame(data)

# Export to LaTeX
with open('table.tex', 'w') as f:
    f.write(df.to_latex(index=False))
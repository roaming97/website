import sys
from tkinter import filedialog 

class TextFix:
    def __init__(self, text: str=None):
        self.text = text or ''
        self.filetypes = (
            ('Text files', '*.txt')
        )

    def define_text(self):
        if self.text == '':
            try:
                self.text = sys.argv[1]
            except IndexError:
                inp = filedialog.askopenfile(filetypes=self.filetypes).name
                if not inp.endswith('.txt'):
                    raise ValueError('Invalid format')
                with open(inp, 'r') as f:
                    self.text = f.read()

    def correct(self, newline=False):
        # Remove additional lines if asked to do so.
        if newline:
            self.text.replace('\n', '\s')
        sentence_list = []
        sep = '.'
        # Capitalization and period system.
        sentence_list = [sentence[1:].capitalize() if not sentence[0].isalpha() 
                    else sentence.capitalize() for sentence in self.text.split(sep)]
        # Add final period.
        result = f'{sep} '.join(sentence_list)
        if result[-1] != sep:
            result += sep
        return result 

def main():
    text = """
    Example sentence. this sentence 
    isn't capitalized and doesn't have a final period
    but does have a new line
    """
    spell = TextFix(text)
    spell.define_text()
    print(spell.correct())

if __name__ == '__main__':
    main()

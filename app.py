from flask import Flask, render_template, request

app = Flask(__name__)

def calculate_bmi(weight, height):
    try:
        height_m = height / 100  # converting height from cm to meters
        bmi = weight / (height_m ** 2)
        if bmi < 18.5:
            category = "Underweight"
        elif 18.5 <= bmi < 24.9:
            category = "Normal weight"
        elif 25 <= bmi < 29.9:
            category = "Overweight"
        else:
            category = "Obese"
        return round(bmi, 2), category
    except ZeroDivisionError:
        return None, "Height must be greater than zero."

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        weight = float(request.form['weight'])
        height = float(request.form['height'])
        bmi, category = calculate_bmi(weight, height)
        return render_template('index.html', bmi=bmi, category=category)
    except ValueError:
        error = "Please enter valid numbers for weight and height."
        return render_template('index.html', error=error)

if __name__ == '__main__':
    app.run(debug=True)

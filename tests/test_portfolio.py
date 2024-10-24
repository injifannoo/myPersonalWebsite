import pytest
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

@pytest.fixture(scope="module")
def setup_browser():
    # Initialize the Chrome WebDriver (assuming ChromeDriver is in PATH)
    driver = webdriver.Chrome()
    driver.maximize_window()
    yield driver
    driver.quit()

def test_homepage_title(setup_browser):
    driver = setup_browser
    driver.get("http://localhost:5173")  # Assuming you're running the portfolio locally
    assert "ITU" in driver.title

def test_contact_form_submission(setup_browser):
    driver = setup_browser
    driver.get("http://localhost:5173/contact")

    # Locate the form inputs
    name_input = driver.find_element(By.NAME, 'your_name')
    email_input = driver.find_element(By.NAME, 'your_email')
    message_input = driver.find_element(By.NAME, 'message')
    
    # Fill in the inputs with test data
    name_input.send_keys("Test User")          # Filling in the name input
    email_input.send_keys("testuser@example.com")  # Filling in the email input
    message_input.send_keys("This is a test message.")  # Filling in the message textarea

    # Submit the form
    submit_button = driver.find_element(By.CSS_SELECTOR, ".submitBtn")
    submit_button.click()

def test_send_email_link(setup_browser):
    driver = setup_browser
    driver.get("http://localhost:5173")
    send_email_link = driver.find_element(By.XPATH, "//a[contains(text(), 'injifanotu@gmail.com')]")
    assert send_email_link is not None
    assert send_email_link.get_attribute("href") == "injifanotu@gmail.com.com"

def test_phone_number_link(setup_browser):
    driver = setup_browser
    driver.get("http://localhost:5173")
    phone_number_link = driver.find_element(By.XPATH, "//a[@href='tel:+251962408198']")
    # phone_number_link = driver.find_element(By.XPATH, "//a[contains(text(), 'tel:+251962408198')]")
    assert phone_number_link is not None
    assert phone_number_link.get_attribute("href") == "tel:+251962408198"

# def test_github_link(setup_browser):
#     driver = setup_browser
#     driver.get("http://localhost:5173")
#     github_link = driver.find_element(By.XPATH, "//a[contains(@href, 'github.com/injifannoo')]")
#     assert github_link is not None
#     assert github_link.get_attribute("href") == "https://github.com/injifannoo/"
def test_send_email_link(setup_browser):
    driver = setup_browser
    driver.get("http://localhost:5173")

    # Corrected XPath
    send_email_link = driver.find_element(By.XPATH, "//a[contains(@href, 'mailto:injifanotu@gmail.com.com')]")
    assert send_email_link is not None
    assert send_email_link.get_attribute("href") == "mailto:injifanotu@gmail.com.com"


def test_telegram_link(setup_browser):
    driver = setup_browser
    driver.get("http://localhost:5173")
    telegram_link = driver.find_element(By.XPATH, "//a[contains(@href, 't.me/InjifannooTU')]")
    assert telegram_link is not None
    assert telegram_link.get_attribute("href") == "https://t.me/InjifannooTU"

def test_linkedin_link(setup_browser):
    driver = setup_browser
    driver.get("http://localhost:5173")
    linkedin_link = driver.find_element(By.XPATH, "//a[contains(@href, 'linkedin.com/in/injifanotamiru')]")
    assert linkedin_link is not None
    assert linkedin_link.get_attribute("href") == "https://www.linkedin.com/in/injifanotamiru/"

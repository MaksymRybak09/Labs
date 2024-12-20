# Лабораторна робота №3

## 1. Adapter
У завданні Адаптер ми створили клас Logger, який дозволяє виводити повідомлення в консоль різними кольорами, а також клас FileWriter, що має методи для запису файлу. За допомогою шаблону Адаптер ми створили файловий логер, який адаптує функціональність Logger до можливостей запису файлів.

[Посилання на код](src/logger/logger.ts).
[Посилання на код](src/logger/adapter.ts).
[Посилання на код](src/logger/fileLogger.ts).

[Посилання на код головної функції](src/main.ts#L69-L88).

## 2. Decorator
У завданні Декоратор ми розробили класи героїв для РПГ гри - Warrior, Mage та Palladin. Для героїв був створений інвентар у вигляді декораторів, який може підходити будь-якому типу героїв. Важливою вимогою була можливість використання декількох екземплярів інвентаря на герої одночасно.

[Посилання на код](src/hero/hero.ts).
[Посилання на код](src/hero/warrior.ts).
[Посилання на код](src/hero/paladin.ts).
[Посилання на код](src/hero/mage.ts).
[Посилання на код](src/hero/inventory.ts).
[Посилання на код](src/hero/armor.ts).
[Посилання на код](src/hero/weapon.ts).
[Посилання на код](src/hero/artifact.ts).

[Посилання на код головної функції](src/main.ts#L49-L67).

## 3. Bridge
У завданні Міст ми розробили базовий клас Shape та його дочірні класи Circle, Square та Triangle. За допомогою шаблону Міст була додана можливість рендерингу кожної з фігур як векторної або растрової графіки.

[Посилання на код](src/shape/shape.ts).
[Посилання на код](src/shape/circle.ts).
[Посилання на код](src/shape/square.ts).
[Посилання на код](src/shape/triangle.ts).
[Посилання на код](src/shape/IRenderer.ts).
[Посилання на код](src/shape/vectorRenderer.ts).
[Посилання на код](src/shape/rasterRenderer.ts).

[Посилання на код головної функції](src/main.ts#L38-L43).

## 4. Proxy
У завданні Проксі були створені класи SmartTextReader, SmartTextReaderChecker та SmartTextReaderLocker. SmartTextReader вміє читати вміст текстового файлу і перетворювати його на двомірний масив. SmartTextReaderChecker є проксі з логуванням, який виводить інформацію про успішне відкриття, прочитання і закриття файлу, а також загальну кількість рядків і символів у прочитаному тексті. SmartTextReaderLocker є проксі з обмеженням доступу до певних файлів, який обмежує доступ до файлів на основі регулярного виразу.

[Посилання на код](src/smartTextReader/iSmartTextReader.ts).
[Посилання на код](src/smartTextReader/smartTextReader.ts).
[Посилання на код](src/smartTextReader/smartTextReaderChecker.ts).
[Посилання на код](src/smartTextReader/smartTextReaderLocker.ts).

[Посилання на код головної функції](src/main.ts#L76-L99).

## 5. Composer
У завданні Компонувальник була створена мова розмітки LightHTML з елементами LightElementNode та LightTextNode. За допомогою цієї мови розмітки ми створили структуру сторінки з вбудованими HTML елементами.

[Посилання на код](src/lightHTML/elementInfo.ts).
[Посилання на код](src/lightHTML/elementInfoFactory.ts).
[Посилання на код](src/lightHTML/lightNode.ts).
[Посилання на код](src/lightHTML/lightTextNode.ts).
[Посилання на код](src/lightHTML/lightElementNode.ts).

[Посилання на код головної функції](src/main.ts#L20-L36).

## 6. Flyweight
У завданні Легковаговик ми використали шаблон Легковаговик на класах HTML елементів, щоб зменшити споживання пам'яті. Також, за допомогою свого LightHTML ми перетворили текст книги в HTML верстку, використовуючи правила, вказані у завданні.

[Посилання на код головної функції](fileReader.js).
